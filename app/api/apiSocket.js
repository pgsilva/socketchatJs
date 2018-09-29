var api = {}


api.teste = function (req, res) {
    console.log("tamo on ");
    var doc = { data: "tamo na atividade" };
    res.json(doc);
};

module.exports = api;