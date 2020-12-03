﻿--1
SELECT Student.studentNumber,personFullNames(studentNumber),ageInYears(studentNumber),DegreeProgram.* FROM Student JOIN DegreeProgram ON DegreeProgram.degreeCode = Student.DegreeCode WHERE isRegisteredFor(studentNumber,'COS326');
--2
--SELECT hasValidCourseCodes(Array['COS301','PHL301','COS326']);
	--Expected: true
--SELECT hasValidCourseCodes(Array['COS333','PHL301','COS326']);
	--Expected: false (COS333 does not exist)
--3
--SELECT hasDuplicateCourseCodes(Array['COS301','PHL301','COS326','COS301']);
	--Expected: true (Repeated COS301)
--SELECT hasDuplicateCourseCodes(Array['COS301','PHL301','COS326']);
	--Expected: false (No repetitions)
