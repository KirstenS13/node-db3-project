const knex = require("knex");
const knexfile = require("../knexfile");

// link it to knexfile.development because the client option lives in the development object
module.exports = knex(knexfile.development);