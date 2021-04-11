const express = require("express");

class CovidRouter {
    constructor(covidService) {
        this.covidService = covidService;
    }
    router() {
        let router = express.Router();

        router.get("/", this.get_building.bind(this));
        console.log("In the covid router");
        return router;
    }

    get_building(req, res) {
        console.log("reached covid backend");
        return res.json(this.covidService.list());
    }
}

module.exports = CovidRouter;
