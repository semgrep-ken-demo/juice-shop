import { Client } from "pg";

const client = new Client({ connectionString: process.env.DATABASE_URL });
let connected = false;

async function query(text: string, values?: unknown[]) {
  if (!connected) {
    await client.connect();
    connected = true;
  }
  return client.query(text, values);
}

// VULNERABLE: string concatenation
async function getUserByName(name: string) {
  const sql = "SELECT * FROM users WHERE name = '" + name + "'";
  return query(sql);
}

// VULNERABLE: template literal
async function getUserById(id: string) {
  const sql = `SELECT * FROM users WHERE id = ${id}`;
  return query(sql);
}

// VULNERABLE: dynamic ORDER BY
async function getUsers(sortCol: string) {
  const sql = `SELECT * FROM users ORDER BY ${sortCol}`;
  return query(sql);
}

// VULNERABLE: login — classic auth bypass target
async function login(username: string, password: string) {
  const sql =
    "SELECT * FROM users WHERE username = '" +
    username +
    "' AND password = '" +
    password +
    "'";
  return query(sql);
}

// SAFE: parameterized query (control — should NOT fire)
async function getUserByIdSafe(id: string) {
  return query("SELECT * FROM users WHERE id = $1", [id]);
}
