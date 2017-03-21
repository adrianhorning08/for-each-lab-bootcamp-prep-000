function iterativeLog(array) {
  array.forEach(function(index, element) {
    console.log(`${element}: ${index}`);
  }
)}

function iterate(callback) {
  var myArray = ['chocolate', 'vanilla', 'strawberry']
  myArray.forEach(callback)
  return myArray
}

function doToArray(array, callback) {
  array.forEach(callback)
}
