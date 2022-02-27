const fs = require("fs");
const json = require("JSONStream");
const es = require("event-stream");

/**
 * Reads a json file and returns a readable stream
 * This function can handle a big JSON file
 *
 * @param {string} pathFile the path of the file to read
 * @returns  {stream} a stream of the file
 */
function readStream(pathFile) {
  const stream = fs.createReadStream(pathFile, { encoding: "utf8" });
  const parser = json.parse("*");
  return stream.pipe(parser);
}

/**
 * Read a JSON file and applies a function to execute on each JSON object
 *
 * @param {string} pathFile the path of the file to read
 * @param {function} fn the function to apply to each sub-object
 * @returns {stream} a stream of the file that is being read
 */
function computeOnStream(pathFile, fn) {
  return readStream(pathFile).pipe(es.map(fn));
}

module.exports = {
    readStream,
    computeOnStream
}