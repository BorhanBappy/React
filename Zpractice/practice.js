function sayHello(dataId, nextData) {
    var i=0
  console.log(nextData,i++);
  setTimeout(() => {
    console.log(`data is ${dataId}`);
    if (nextData) {
      nextData();
    }
  }, 2000);
}

sayHello(1, () => sayHello(2, () => sayHello(3, () => sayHello(4))));
