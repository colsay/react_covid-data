const { sort } = require("./covidData");
const covidData = require("./covidData");

class CovidService {
    constructor() { }

    list() {
        console.log("listing buildings");

        const sortedData = covidData.sort((a, b) => (a.district > b.district) ? 1 : (a.district === b.district) ? ((a.address > b.address) ? 1 : -1) : -1)

        const filteredobj = {};
        let result
        sortedData.forEach((obj) => {
            delete obj.case
            const key = `${obj.district}${obj.address}`
            if (!filteredobj[key]) {
                filteredobj[key] = { ...obj, count: 0 };
            } filteredobj[key].count += 1;
        })
        result = Object.values(filteredobj)
        return (result);
    }
}

module.exports = CovidService;
