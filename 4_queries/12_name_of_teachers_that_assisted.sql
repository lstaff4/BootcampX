SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort_id
FROM teachers
JOIN assistance_requests ON teachers.id = teacher_id
JOIN students ON students.id = student_id
JOIN cohorts ON cohort_id = cohort_id
WHERE cohorts.name LIKE 'JUL02'
GROUP BY teachers.name, cohorts.name
ORDER BY teachers.name;