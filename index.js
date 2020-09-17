function space(string) {
  if (typeof string !== "string") throw new TypeError("Please enter a string");
  first = string.split(" ").join(" ")
  return first.split("").join(" ")
};

function spacecaps(string) {
  if (typeof string !== "string") throw new TypeError("Please enter a string");
  first = string.toUpperCase().split(" ").join(" ")
  return first.split("").join(" ")
};

function caps(string) {
  if (typeof string !== "string") throw new TypeError("Please enter a string");
  return string.toUpperCase()
};

function lowercase(string) {
  if (typeof string !== "string") throw new TypeError("Please enter a string");
  return string.toLowerCase()
};


module.exports = {space, spacecaps, caps, lowercase}