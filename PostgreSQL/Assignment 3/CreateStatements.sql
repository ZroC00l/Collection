CREATE TYPE titles AS ENUM( 'Ms', 'Mev', 'Miss', 'Mrs', 'Mr', 'Mnr','Dr','Prof');

CREATE SEQUENCE degreeSeq START 1;
CREATE SEQUENCE courseSeq START 100;
CREATE SEQUENCE studentSeq START 10000;
--STUDENT NUMBER DOMAIN
CREATE DOMAIN studentNumType AS varchar
CONSTRAINT valid_studentNum CHECK (VALUE ~ '^\d{6}$');

--STUDY YEARS DOMAIN
CREATE DOMAIN studyYearsType AS char
CONSTRAINT valid_studyYears CHECK (VALUE ~ '^\d{1}$'
									OR VALUE ~ '^\d{2}$');

--fullNameType
CREATE TYPE fullNameType AS(
title titles,
fName varchar(50),
sName varchar(50)
);

CREATE TABLE DegreeProgram (
degreeKey INT NOT NULL DEFAULT nextval('degreeSeq') PRIMARY KEY,
degreeCode varchar(5) UNIQUE,
degreeName varchar(50),
numberOfYears int CHECK(numberOfYears > 0),
faculty varchar(50)
);

CREATE TABLE Course(
courseKey INT NOT NULL DEFAULT nextval('courseSeq') PRIMARY KEY,
courseCode varchar(6),
courseName varchar(50),
department varchar(50),
credits int CHECK(credits > 0)
);

CREATE TABLE Student (
studentKey INT NOT NULL DEFAULT nextval('studentSeq') PRIMARY KEY,
studentNumber studentNumType,
fullNames fullNameType UNIQUE,
dateOfBirth Date,
degreeCode varchar(5) REFERENCES DegreeProgram(degreeCode),
yearOfStudy studyYearsType
);

CREATE TABLE Undergraduate (
courseRegistration varchar(6)[]
) INHERITS (Student);

CREATE TYPE categories AS ENUM('part time', 'full time');

CREATE TABLE Postgraduate (
category categories,
supervisor fullNameType
) INHERITS (Student);

CREATE TABLE deletedUndergrad
(
	datetime timestamp,
	userid varchar
) INHERITS(Undergraduate);

CREATE TABLE deletedPostgrad
(
	datetime timestamp,
	userid varchar
) INHERITS(Postgraduate);



--FUNCTIONS
CREATE OR REPLACE FUNCTION personFullNames(studentNumType) RETURNS text AS
$$
	DECLARE
	 	fullName text;
	BEGIN
		SELECT concat((fullNames).title,' ',(fullNames).fName,' ',(fullNames).sName) INTO fullName FROM Student WHERE studentNumber = $1;
		RETURN fullName;
	END
$$ LANGUAGE plpgsql; 

CREATE OR REPLACE FUNCTION personFullNames(studentNumType,int) RETURNS text AS
$$
	DECLARE
		fullNames text;
	BEGIN
		SELECT concat((supervisor).title,' ',(supervisor).fName,' ',(supervisor).sName) INTO fullNames FROM Postgraduate WHERE studentNumber = $1;
		RETURN fullNames;
	END
$$ LANGUAGE plpgsql;

CREATE FUNCTION ageinyears(studentNumType)
  RETURNS float AS
$$
	DECLARE
		age float;
	BEGIN
		SELECT extract(YEAR from age(Student.dateOfBirth)) INTO age FROM Student WHERE Student.studentNumber = $1;
		RETURN age;
	END
$$
  LANGUAGE plpgsql;

CREATE FUNCTION isFinalYearStudent(studentNumType) RETURNS boolean AS 
$$
	DECLARE
	 value boolean;
	BEGIN
		SELECT ((SELECT yearOfStudy FROM Student WHERE studentNumber = $1) = (SELECT numberOfYears FROM DegreeProgram WHERE 
			(SELECT degreeCode FROM Student WHERE studentNumber = $1) = degreeCode)) INTO value;
		RETURN value;
	END
$$ LANGUAGE plpgsql;


CREATE FUNCTION isRegisteredFor(studentNumType, varchar(6)) RETURNS boolean AS
$$
	DECLARE
	value boolean;
	BEGIN
		SELECT $2 = ANY ((SELECT Undergraduate.courseRegistration FROM Undergraduate WHERE Undergraduate.studentNumber = $1)::text[]) INTO value;
		RETURN value;
	END
$$
  LANGUAGE plpgsql;

CREATE FUNCTION isFullTime(studentNumType) RETURNS boolean AS
$$
	DECLARE
		value boolean;
	BEGIN
		SELECT 'full time' = ( SELECT Postgraduate.category  FROM Postgraduate  WHERE Postgraduate.studentNumber = $1) INTO value;
		RETURN value;
	END
$$
  LANGUAGE plpgsql;
  
CREATE FUNCTION isPartTime(studentNumType) RETURNS boolean AS
$$
	DECLARE
		value boolean;
	BEGIN
		SELECT 'part time' = (SELECT Postgraduate.category FROM Postgraduate WHERE Postgraduate.studentNumber = $1) INTO value;
		RETURN value;
	END
$$
  LANGUAGE plpgsql;

CREATE FUNCTION isValidCourseCode(varchar(6)) RETURNS boolean AS
$$
	DECLARE 
		value boolean;
	BEGIN
		SELECT $1 = ANY (SELECT Course.courseCode FROM Course) INTO value;
		RETURN value;
	END
$$
	LANGUAGE plpgsql;

CREATE FUNCTION hasValidCourseCodes(varchar(6)[]) RETURNS boolean AS
$$
	DECLARE 
		value boolean;
	BEGIN
		SELECT $1 <@ (SELECT Array(SELECT courseCode FROM Course)) INTO value;
		RETURN value;
	END
$$
	LANGUAGE plpgsql;

CREATE FUNCTION courseCodeFrequency(studentNumType,varchar(6)) RETURNS int AS
$$
	DECLARE
		frequency int;
	BEGIN
		SELECT count(*) FROM Unnest(ARRAY(SELECT courseRegistration FROM Undergraduate WHERE studentNumber = $1)) element 
  		WHERE element =  $2 INTO frequency;
  		RETURN frequency;
  	END
$$
	LANGUAGE plpgsql;

CREATE FUNCTION courseCodeFrequency(varchar(6)[],varchar(6)) RETURNS int AS
$$
	DECLARE
		frequency int;
	BEGIN
		SELECT count(*) FROM Unnest($1) element 
  		WHERE element =  $2 INTO frequency;
  		RETURN frequency;
  	END
$$
	LANGUAGE plpgsql;

CREATE FUNCTION hasDuplicateCourseCodes(varchar(6)[]) RETURNS boolean AS
$$
	DECLARE
		value int;
		x varchar(6);
	BEGIN
		FOREACH x in ARRAY $1 
		LOOP
			SELECT courseCodeFrequency($1,x) INTO value;
			IF value > 1 THEN RETURN true;
			END IF;
		END LOOP;
		RETURN false;
	END
$$
	LANGUAGE plpgsql;

CREATE FUNCTION isValidDegreeCode(varchar(5)) RETURNS boolean AS
$$
	DECLARE
		value boolean;
	BEGIN
		SELECT  Array[$1] <@ (SELECT Array(SELECT degreeCode FROM DegreeProgram)) INTO value;
		RETURN value;
	END
$$
	LANGUAGE plpgsql;

CREATE FUNCTION check_valid_degree_code() RETURNS TRIGGER AS
$check_valid_degree_code$
	BEGIN
		IF NEW.degreeCode IS NULL THEN
			RAISE EXCEPTION 'degreeCode cannot be null';
		END IF;

		IF isValidDegreeCode(NEW.degreeCode) = false THEN
			RAISE EXCEPTION 'invalid degreeCode';
		END IF;
		IF char_length(NEW.degreeCode) < 3 THEN
			RAISE EXCEPTION 'degreeCode is too short';
		END IF;
		RETURN NEW;
	END
$check_valid_degree_code$
	LANGUAGE plpgsql;

CREATE TRIGGER check_valid_degree BEFORE INSERT OR UPDATE ON Student
	FOR EACH ROW EXECUTE PROCEDURE check_valid_degree_code();
CREATE TRIGGER check_valid_degree BEFORE INSERT OR UPDATE ON Undergraduate
	FOR EACH ROW EXECUTE PROCEDURE check_valid_degree_code();
CREATE TRIGGER check_valid_degree BEFORE INSERT OR UPDATE ON Postgraduate
	FOR EACH ROW EXECUTE PROCEDURE check_valid_degree_code();

CREATE FUNCTION check_valid_course_codes() RETURNS TRIGGER AS
$check_valid_course_codes$
	DECLARE
		x varchar(6);
	BEGIN
		IF NEW.courseRegistration IS NULL THEN
			RAISE EXCEPTION 'courseRegistration cannot be null';
		END IF;
		IF hasDuplicateCourseCodes(NEW.courseRegistration) = true THEN
			RAISE EXCEPTION 'courseRegistration contains dupliicate courseCodes';
		END IF;
		
		FOREACH x IN ARRAY NEW.courseRegistration 
			LOOP
				IF char_length(x) < 6 THEN
					RAISE EXCEPTION 'A certain courseCode in courseRegistration is too short';
				END IF;
			END LOOP;

		IF hasValidCourseCodes(NEW.courseRegistration) = false THEN
			RAISE EXCEPTION 'courseRegistration contains invalid courseCode';
		END IF;
		RETURN NEW;
	END
$check_valid_course_codes$
	LANGUAGE plpgsql;

CREATE TRIGGER check_valid_course_registration BEFORE INSERT OR UPDATE ON Undergraduate
	FOR EACH ROW EXECUTE PROCEDURE check_valid_course_codes();

CREATE FUNCTION record_delete_undergrad() RETURNS TRIGGER AS
$record_delete_undergrad$
BEGIN
        INSERT INTO deletedUndergrad SELECT OLD.*,now(), user;
        RETURN OLD;
END
$record_delete_undergrad$
LANGUAGE plpgsql;

CREATE TRIGGER audit_delete_undergrad AFTER DELETE ON Undergraduate
	FOR EACH ROW EXECUTE PROCEDURE record_delete_undergrad();

CREATE FUNCTION record_delete_postgrad() RETURNS TRIGGER AS
$record_delete_postgrad$
BEGIN
        INSERT INTO deletedPostgrad SELECT OLD.*,now(), user;
        RETURN OLD;
END
$record_delete_postgrad$
LANGUAGE plpgsql;

CREATE TRIGGER audit_delete_postgrad AFTER DELETE ON Postgraduate
	FOR EACH ROW EXECUTE PROCEDURE record_delete_postgrad();

