let addNumbers = function (numbers) {
  let suma = 0
  for (let i = 0; i < numbers.length; i++) {
    suma += numbers[i]
  }
  return suma
}
module.exports = addNumbers;
