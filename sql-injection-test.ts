const { Pool, Client } = require('pg')

const pg = require('pg')

const pgClient = new pg.Client(
  `postgresql://`,
)

async function test2(req,res,next) {
const pool=new Pool(a)
// ruleid: express-pg-sqli
pool.query(
  'INSERT INTO profiledb (profilename, profiledescription, approved) VALUES ($1, $2, $3)',
  [req.query.profileTitle, req.query.profileBody, 'Pending'],
);
// ok: express-pg-sqli
const res = await pool.query('SELECT NOW()')

const text = 'INSERT INTO users(name, email) VALUES($1, $2) RETURNING *'
const values = [req.query.name, req.query.profileBody]
const text1 = `INSERT INTO users(name, email) VALUES(${req.query.name}, ${req.query.profileBody}) RETURNING *`

// ok: express-pg-sqli
client.query(text, values, (err, res) => {})
await pool.end()


const client = new Client()
await client.connect()
// ruleid: express-pg-sqli
const res = await client.query("INSERT INTO profiledb (profilename, profiledescription, approved) VALUES ('"+ 
req.query.profileTitle +"', '"+ req.query.profileBody +"', 'Pending');");

const sleep = Number(req.body.sleep);
if (!Number.isFinite(sleep)) {
  throw new TypeError('Invalid req.body.sleep');
}

const q1 = pgClient.query('SELECT pg_sleep($1);', [sleep]);
    // ruleid: express-pg-sqli
    .query(`SELECT pg_sleep(${req.body.sleep});`)

const q2 = pgClient
// ok: express-pg-sqli
.query(text,values)

const q3 = pgClient
// ruleid: express-pg-sqli
.query(text1)


await client.end()

}
