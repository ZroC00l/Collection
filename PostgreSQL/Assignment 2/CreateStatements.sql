CREATE SEQUENCE degree_key START 1;
CREATE SEQUENCE course_key START 100;
CREATE SEQUENCE student_key START 10000;


Create Type identities as(
	title char(5),
	first_name text,
	last_name text
	);
CREATE TYPE postgrad_category AS ENUM ('full time', 'part time'); 
Create Table Course(
	--course_key serial Primary key,
	course_key SERIAL,
	course_code char(10) unique , 
	course_name char(30),
	department char(50),
	credits Integer
	);
Create Table Degree_Program(
	--degree_key serial Primary key,
	degree_key SERIAL,
	degree_code char(10) unique ,
	degree_name char (30),
	number_of_years Integer,
	faculty char(20)
	);
Create Table Student(
	--student_key serial PRIMARY KEY,
	student_key SERIAL,
	student_number integer UNIQUE,
	student_name identities,
	date_of_birth date,
	degree_code char(10) REFERENCES Degree_Program(degree_code),
	year_of_study integer
	);
	
Create Table Undergraduate(
	courseRegistration text[]
	) INHERITS(Student);
		
Create Table Postgraduate(
	category postgrad_category,
	supervisor identities
	)INHERITS(Student);


CREATE FUNCTION personFullNames(int) RETURNS text  AS  
$$         
	SELECT CONCAT((student_name).title,' ',(student_name).first_name,' ',(student_name).last_name)
	AS personFullNames 
	FROM Student
	Where student_number=$1         
$$ LANGUAGE SQL; 
CREATE FUNCTION ageInYears(int) RETURNS int  AS  
$$         
	SELECT CAST(2017-(DATE_PART('year',date_of_birth))as int)
	AS ageInYears 
	FROM Student
	Where student_number=$1         
$$ LANGUAGE SQL;
CREATE FUNCTION isFullTime(int) RETURNS boolean  AS  
$$         
	SELECT exists(SELECT *
	FROM Postgraduate
	Where student_number=$1 and category='full time');         
$$ LANGUAGE SQL;
CREATE FUNCTION isPartTime(int) RETURNS boolean  AS  
$$         
	SELECT exists(SELECT *
	FROM Postgraduate
	Where student_number=$1 and category='part time');         
$$ LANGUAGE SQL;
CREATE FUNCTION postpersonFullNames(int) RETURNS text  AS  
$$         
	SELECT CONCAT((supervisor).title,' ',(supervisor).first_name,' ',(supervisor).last_name)
	AS personFullNames
	FROM Postgraduate
	Where student_number=$1         
$$ LANGUAGE SQL;
CREATE FUNCTION isFinalYearStudent(int) RETURNS boolean  AS  
$$         
	SELECT exists(Select *
	FROM Undergraduate , Degree_Program 
	Where student_number=$1 and Undergraduate.degree_code=Degree_Program.degree_code and Undergraduate.year_of_study=Degree_Program.number_of_years);        
$$ LANGUAGE SQL;
CREATE FUNCTION isRegisteredFor(int,text) RETURNS boolean  AS  
$$         
	SELECT exists(Select *
	FROM Undergraduate 
	Where student_number=$1 and array_to_string(courseRegistration,',') like '%'||$2||'%'); 
$$ LANGUAGE SQL;