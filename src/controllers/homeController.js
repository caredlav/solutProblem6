const pokeModel = require("../models/pokeApiModel");

const homeController = {
    getHome: (req, res) => {
        res.render("home");
    },
    getPokemon: async (req, res) => {
        try {
            const pokemonInfo = req.body.pokeInfo;
            const pokemonFound = await pokeModel.getPokemon(pokemonInfo);
            res.render("pokemonDetail", { pokemon: pokemonFound });
        } catch (error) {
            res.send(error);
        }
    }
}

module.exports = homeController;