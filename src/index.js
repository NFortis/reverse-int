module.exports = function reverse (n) {
  let newData = n.toString().split("")

  return parseFloat(newData.reverse().join(""));

}
