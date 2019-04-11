module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  let { enhancement } = item;

  if(enhancement === 20){
    return { ...item };
  }

  enhancement += 1;

  return { ...item, enhancement };
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
