const knex = require('knex')({
  client: 'mysql',
  connection: {
    host : '127.0.0.1',
    user : 'cleaning',
    password : 'cleaning',
    database : 'cleaning'
  }});
export function db(table) {
  return knex(table);
}
