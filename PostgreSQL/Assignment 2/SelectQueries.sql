SELECT student_key, student_number, personFullNames(student_number), ageInYears(student_number)
FROM Student;

SELECT student_key, student_number, personFullNames(student_number), degree_code, year_of_study, courseRegistration
FROM Undergraduate;

SELECT student_key, student_number, personFullNames(student_number), degree_code, year_of_study, category, postpersonFullNames(student_number)
FROM Postgraduate;

SELECT student_key, student_number, personFullNames(student_number), degree_code, year_of_study, courseRegistration
FROM Undergraduate
WHERE isFinalYearStudent(student_number);

SELECT student_key, student_number, personFullNames(student_number), degree_code, year_of_study, courseRegistration
FROM Undergraduate
WHERE isRegisteredFor(student_number, 'COS326');

SELECT student_key, student_number, personFullNames(student_number), degree_code, year_of_study, category, postpersonFullNames(student_number)
FROM Postgraduate
WHERE isFullTime(student_number);

SELECT student_key, student_number, personFullNames(student_number), degree_code, year_of_study, category, postpersonFullNames(student_number)
FROM Postgraduate
WHERE isPartTime(student_number);