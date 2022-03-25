function hello() {
  console.log("Hello World");
}

module.exports = hello; // enabled require
module.exports.default = hello; // enabled import xxx from
