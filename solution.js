// Use a simple CLI to get the personId from args
const cli = require("./cli");
const personId = cli.getId();

const { computeOnStream } = require("./json");

/**
 * Check if the person object has the same id as the personId
 * If so, this function show the name of that person
 * Else, this function do nothing
 *
 * @param {object} person the person to search
 * @returns {void} show the name of the person searched
 */
function showValidPerson(person) {
  if (person.id === personId) console.log(person.name);
}

// main
// Run with the following command: npm start
// Or, with (10 for example): npm run search 10
computeOnStream("./input.json", showValidPerson);
