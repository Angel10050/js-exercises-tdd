function formatCities(format) {
    formatEspace = []
    format.forEach(element => {
        formatEspace.push(element.city + ' is the capital of ' + element.country)
    });
    return formatEspace
}
module.exports = formatCities