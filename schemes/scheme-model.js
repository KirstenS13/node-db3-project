// make our db object by importing the config file
// then we can use the db in our helper functions
// we can access the database using db
const db = require("../data/config");

// define db helper functions here

// FIND
function find() {
    return db.select("*").from("schemes");
    // alternate syntax
    // return db("schemes");
}

// FIND BY ID
function findById(id) {
    return db.select("*").from("schemes").where("id", id);
    // alternate syntax
    // return db("schemes").where("id", id);
}

// FIND STEPS
function findSteps(id) {
    return db.select("*").from("steps").where("scheme_id", id);
    // alternate syntax
    // return db("steps").where("scheme_id", id);
}

// ADD

// UPDATE

// DELETE

// export the db helper functions
module.exports = {
    find,
    findById,
    findSteps
};