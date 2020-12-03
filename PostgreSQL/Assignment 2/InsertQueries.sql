INSERT INTO Degree_Program (degree_code, degree_name, number_of_years, faculty) VALUES ('BSc', 'Bachelor of Science', 3, 'EBIT');
INSERT INTO Degree_Program (degree_code, degree_name, number_of_years, faculty) VALUES ('BIT', 'Bachelor of IT', 4, 'EBIT');
INSERT INTO Degree_Program (degree_code, degree_name, number_of_years, faculty) VALUES ('PhD', 'Philosphiac Doctor', 5, 'EBIT');

INSERT INTO Course (course_code, course_name, department, credits) VALUES ('COS301', 'Software Engineering', 'Computer Science', 40);
INSERT INTO Course (course_code, course_name, department, credits) VALUES ('COS326', 'Database Systems', 'Computer Science', 20);
INSERT INTO Course (course_code, course_name, department, credits) VALUES ('MTH301', 'Discrete Mathematics', 'Mathematics', 15);
INSERT INTO Course (course_code, course_name, department, credits) VALUES ('PHL301', 'Logical Reasoning', 'Philisophy', 15);

SET datestyle=dmy;
INSERT INTO undergraduate(student_number, student_name, date_of_birth, degree_code, year_of_study, 
            courseregistration)
    VALUES (140010,ROW('Mr','James','Bond'), '10/01/1996', 'BSc', 3, ARRAY['COS301','COS326','MTH301']);
INSERT INTO undergraduate(student_number, student_name, date_of_birth, degree_code, year_of_study, 
            courseregistration)
    VALUES (140015,ROW('Mr','LeBron','James'), '25/05/1995', 'BSc', 3, ARRAY['COS301','PHL301','MTH301']);
INSERT INTO undergraduate(student_number, student_name, date_of_birth, degree_code, year_of_study, 
            courseregistration)
    VALUES (131120,ROW('Ms','Angela','Simmons'), '30/01/1995', 'BIT', 3, ARRAY['COS301','COS326','PHL301']);
INSERT INTO undergraduate(student_number, student_name, date_of_birth, degree_code, year_of_study, 
            courseregistration)
    VALUES (131140,ROW('Mrs','Giselle','Parker'), '20/02/1996', 'BIT', 4, ARRAY['COS301','COS326','MTH301','PHL301']);


INSERT INTO postgraduate(
            student_number, student_name, date_of_birth, degree_code, year_of_study, 
            category, supervisor)
    VALUES (101122, ROW('Mrs','Brittany','Murphy'), '15/06/1987', 'PhD', 2, 'full time', ROW('Prof','Jeff','mcDonald'));

INSERT INTO postgraduate(
            student_number, student_name, date_of_birth, degree_code, year_of_study, 
            category, supervisor)
    VALUES (121101, ROW('Ms','Toni','Braxton'), '27/04/1985', 'PhD', 3, 'part time', ROW('Prof','Beefy','Steers'));


--INSERT INTO postgraduate(
  --          student_number, student_name, date_of_birth, degree_code, year_of_study, 
    --        category, supervisor)
    --VALUES (101122, ROW('Mrs','Queen','Jones'), '15/06/1987', 'PhD', 2, 'full time', ROW('Prof','John','Lindenberg'));


 

