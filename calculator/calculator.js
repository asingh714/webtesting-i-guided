module.exports = {
  add,
};

function add(args) {
  const numbers = Array.isArray(args) ? args :  Array.from(arguments)
  return numbers.reduce(((item, sum) => sum += item), 0);
}