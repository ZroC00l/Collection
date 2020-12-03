--1
INSERT INTO Undergraduate VALUES(DEFAULT,140010,ROW('Mrs', 'Thato', 'Mothusi'),'1995-03-11','BEng',3,ARRAY['COS301','COS326','MTH301']);
--DegreeCode BEng does not exist

--2
INSERT INTO Undergraduate VALUES(DEFAULT,140010,ROW('Mrs', 'Tshwaragano', 'Gabanakgosi'),'1995-03-11','BSc',3,ARRAY['COS333','COS326','MTH301']);
--CourseCode COS333 does not exist

--3
INSERT INTO Postgraduate VALUES(DEFAULT,101122,ROW('Mr', 'Letlhogonolo', 'Mothusi'),'1989-07-15','PhL',2,'full time',ROW('Prof', 'Charles', 'Xavier'));
--DegreeCode PhL does not exist

--4
UPDATE Undergraduate SET DegreeCode = 'BEng' WHERE studentNumber = '140010'
--DegreeCode BEng does not exist

--5
--UPDATE Undergraduate SET courseRegistration = ARRAY['COS333','COS326','MTH301'] WHERE studentNumber = '140010'
--CourseCode COS333 does not exist

--6
UPDATE Postgraduate SET DegreeCode = 'PhL' WHERE studentNumber = '121101'
--DegreeCode PhL does not exist

--7
DELETE FROM Undergraduate WHERE studentNumber = '140010'
SELECT * FROM DeletedUndergrad

--8
DELETE FROM Postgraduate WHERE studentNumber = '121101'
SELECT * FROM DeletedPostgrad