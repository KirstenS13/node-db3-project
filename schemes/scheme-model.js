// make our db object by importing the config file
// then we can use the db in our helper functions
// we can access the database using db
const db = require("../data/config");

// define db helper functions here

// FIND
function find() {
    return db
        .select("*")
        .from("schemes");
    // alternate syntax
    // return db("schemes");
}

// FIND BY ID
function findById(id) {
    return db
        .select("*")
        .from("schemes")
        .where("id", id);
    // alternate syntax
    // return db("schemes").where("id", id);
}

// FIND STEPS
function findSteps(id) {
    return db
        .select("s.id", "s.step_number", "s.instructions", "sc.scheme_name")
        .from("steps as s")
        .innerJoin("schemes as sc", "sc.id", "s.scheme_id")
        .where("scheme_id", id)
        .orderBy("s.step_number");
    // alternate syntax
    // return db("steps")
    //  .innerJoin("schemes as sc", "sc.id", "s.scheme_id")
    //  .where("scheme_id", id)
    //  .select("s.id", "s.step_number", "s.instructions", "sc.scheme_name")
    //  .orderBy("s.step_number");
}

// ADD
async function add(schema) {
    const id = await db("schemes").insert(schema);
    console.log(id[0])
    const newScheme = await findById(id[0]);
    return newScheme;
}

// UPDATE

// DELETE

// export the db helper functions
module.exports = {
    find,
    findById,
    findSteps,
    add
};