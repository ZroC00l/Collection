
--DegreePrograms
INSERT INTO DegreeProgram VALUES(DEFAULT,'BSc','Bachelor of Science',3,'EBIT');
INSERT INTO DegreeProgram VALUES(DEFAULT,'BIT','Bachelor of IT',4,'EBIT');
INSERT INTO DegreeProgram VALUES(DEFAULT,'PhD','Philosophiae Doctor',5,'EBIT');

--Courses
INSERT INTO Course VALUES(DEFAULT,'COS301','Software Engineering','Computer Science',40);
INSERT INTO Course VALUES(DEFAULT,'COS326','Database Systems','Computer Science',20);
INSERT INTO Course VALUES(DEFAULT,'MTH301','Discrete Mathematics','Mathematics',15);
INSERT INTO Course VALUES(DEFAULT,'PHL301','Logical Reasoning','Philosophy',15);

--Undergraduates
INSERT INTO Undergraduate VALUES(DEFAULT,140010,ROW('Mrs', 'Karabo', 'Mothusi'),'1996-01-10','BSc',3,ARRAY['COS301','COS326','MTH301']);
INSERT INTO Undergraduate VALUES(DEFAULT,140015,ROW('Mrs', 'Keneilwe', 'Mothusi'),'1995-05-25','BSc',3,ARRAY['COS301','PHL301','MTH301']);
INSERT INTO Undergraduate VALUES(DEFAULT,131120,ROW('Mr', 'Oratile', 'Mothusi'),'1995-01-30','BIT',4,ARRAY['COS301','COS326','PHL301']);
INSERT INTO Undergraduate VALUES(DEFAULT,131140,ROW('Ms', 'Onkgopotse', 'Mothusi'),'1996-02-20','BIT',4,ARRAY['COS301','COS326','MTH301','PHL301']);

--Postgraduates
INSERT INTO Postgraduate VALUES(DEFAULT,101122,ROW('Mrs', 'Refilwe', 'Mothusi'),'1987-06-15','PhD',2,'full time',ROW('Prof', 'Deez', 'Nutz'));
INSERT INTO Postgraduate VALUES(DEFAULT,121101,ROW('Mr', 'Tebogo', 'Mothusi'),'1985-04-27','PhD',3,'part time',ROW('Mr', 'About', 'WeekAgo'));