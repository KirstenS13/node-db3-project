// make our db object by importing the config file
// then we can use the db in our helper functions
// we can access the database using db
const db = require("../data/config");

// define db helper functions here

// FIND
function find() {
    return db.select("*").from("schemes");
}

// FIND BY ID

// FIND STEPS

// ADD

// UPDATE

// DELETE

// export the db helper functions
module.exports = {
    find
};