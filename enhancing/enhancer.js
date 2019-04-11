module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  return { ...item };
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  let { durability } = item;

  durability = 100;

  return { ...item, durability };
}

function get(item) {
  return { ...item };
}
