var express = require("express");
var router = express.Router();

/* GET imc index page. */
router.get("/", function (req, res, next) {
    res.render("imc-index", { dataTable: { magreza: "< 18.5" } });
});

router.post("/calculate", function(req, res) {
    res.json({
        height: 1.77,
        weight: 70,
        imc: 20,
        imcDescription: 'normal'
    })
})

module.exports = router;
