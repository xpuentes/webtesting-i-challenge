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
  let { enhancement, durability } = item;

  if(enhancement < 15){
    durability -= 5;
    return { ...item, durability };
  } else if (enhancement >= 15){
    if(enhancement > 16){
      enhancement -= 1;
    }

    durability -= 10;
    return { ...item, durability, enhancement };
  }

  return { ...item };
}

function repair(item) {
  let { durability } = item;

  durability = durability || -1;

  if(durability < 0){
    return {message: 'This item is beyond repair'};
  } else if (durability > 100){
    return {message: 'This item should not exist'};
  }

  durability = 100;

  return { ...item, durability };
}

function get(item) {
  return { ...item };
}
