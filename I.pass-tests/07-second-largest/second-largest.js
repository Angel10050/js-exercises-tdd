function secondLargest(num) {
    num.pop()
    return Math.max(...num)
}
module.exports = secondLargest