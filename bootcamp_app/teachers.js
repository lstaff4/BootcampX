const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const cohort_name = process.argv[2];
const values = [`${cohort_name}`];

pool.query(`
SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort_id
FROM teachers
JOIN assistance_requests ON teachers.id = teacher_id
JOIN students ON students.id = student_id
JOIN cohorts ON cohort_id = cohort_id
WHERE cohorts.name LIKE '${process.argv[2] || 'JUL02'}'
GROUP BY teachers.name, cohorts.name
ORDER BY teachers.name;
`)
.then(res => {
  res.rows.forEach(row => {
    console.log(`${row.cohort_id}: ${row.teacher}`);
  })
})
.catch(err => console.error('query error', err.stack));