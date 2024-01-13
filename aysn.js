function myCallbackFunction(data) {
  console.log("Callback executed with data:", data);
}
// function perfromAysnOperstion(callback) {
//   console.log("Hello Bappy");
//   setTimeout(function () {
//     const data = "Aysn Operation Complete";
//     const data2='asysn operation two Complete'
//     callback(data);
//     callback(data2)
//   }, 2000);
// }

// perfromAysnOperstion(myCallbackFunction);

function getData(data, getnextdata) {
  setTimeout(() => {
    console.log("data ", data);
    if (getnextdata) {
      getnextdata();
    }
  }, 2000);
}

getData(1, () => getData(2, () => getData(3)));
