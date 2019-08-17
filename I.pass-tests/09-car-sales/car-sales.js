function sales(cars) {
    let myTotals = {}
    cars.forEach(element => {
        if (myTotals[element.make] === undefined) {
            myTotals[element.make] = element.price
        } else {
            myTotals[element.make] += element.price
        }
    });
    return myTotals
}
module.exports = sales