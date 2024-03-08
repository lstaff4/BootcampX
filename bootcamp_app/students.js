const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const cohort_name = process.argv[2];
const limit = process.argv[3];
const values = [`${cohort_name}`, limit]

pool.query(`
SELECT students.id, students.name, cohorts.name as cohort_name
FROM students
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name LIKE '${values[0]}%'
LIMIT ${values[1] || 5};
`)
.then(res => {
  console.log(res.rows)
})
.catch(err => console.error('query error', err.stack));