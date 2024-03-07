const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

pool.query(`
SELECT students.id, students.name, cohorts.name as cohort_name
FROM students
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name LIKE '${process.argv[2]}%'
LIMIT ${process.argv[3] || 5};
`)
.then(res => {
  console.log(res.rows)
})
.catch(err => console.error('query error', err.stack));