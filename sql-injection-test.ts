import { Pool } from "pg";

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

// VULNERABLE: string concatenation
async function getUserByName(name: string) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return pool.query(query);
}

// VULNERABLE: template literal
async function getUserById(id: string) {
  const query = `SELECT * FROM users WHERE id = ${id}`;
  return pool.query(query);
}

// VULNERABLE: dynamic ORDER BY
async function getUsers(sortCol: string) {
  const query = `SELECT * FROM users ORDER BY ${sortCol}`;
  return pool.query(query);
}

// VULNERABLE: login — classic auth bypass target
async function login(username: string, password: string) {
  const query =
    "SELECT * FROM users WHERE username = '" +
    username +
    "' AND password = '" +
    password +
    "'";
  return pool.query(query);
}

// SAFE: parameterized query (control — should NOT fire)
async function getUserByIdSafe(id: string) {
  return pool.query("SELECT * FROM users WHERE id = $1", [id]);
}
