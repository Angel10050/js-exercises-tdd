// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings
// var datosComunes = /[0-9]/
function average(elements) {
    let suma = 0
    let onlyNum = elements.filter(vle => typeof vle === 'number')
    onlyNum.forEach(function (valor) {
        suma += valor
    });
    return suma / onlyNum.length
}
module.exports = average


// Filtrar los numeros y ahi si sacar el promedio