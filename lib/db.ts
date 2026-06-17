import mysql from 'mysql2/promise';

console.log('MYSQLHOST =', process.env.MYSQLHOST);
console.log('MYSQLDATABASE =', process.env.MYSQLDATABASE);

export const db = mysql.createPool({
  host: process.env.MYSQLHOST,
  port: Number(process.env.MYSQLPORT),
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
});