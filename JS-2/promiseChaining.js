const cleanRoom = function () {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("Cleaning room");
      res("Cleaned the room");
    }, 2000);
  });
};

const removeGarbage = function () {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("Removing garbage");
      res("Removed Garbage");
    }, 1000);
  });
};

const getIceCream = function (message) {
  return new Promise((res, rej) => {
    console.log("please give icecream");
    res(`hello ${message}`);
    console.log("got icecream");
  });
};

cleanRoom()
  .then((result) => {
    console.log(result);
    return removeGarbage();
  })
  .then((result) => {
    console.log(result);
    return getIceCream(result);
  })
  .then((result) => {
    console.log(result);
    console.log("Everything is done!");
  });
