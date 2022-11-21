const fecth = require("node-fetch");

const apiCall = async (pokeInfo) => {
    try {
        const api = await fecth(`https://pokeapi.co/api/v2/pokemon/${pokeInfo}/`);
        const response = await api.json();
        return response;
    } catch (error) {
        console.log(error);
    }
}

const pokeModel = {
    getPokemon: async (pokeInfo) => {
        try {
            const pokemonToFind = await apiCall(pokeInfo);
            return {
                name: pokemonToFind.name,
                id: pokemonToFind.id,
                type: pokemonToFind.types,
                weight: pokemonToFind.weight,
                height: pokemonToFind.height,
                image: pokemonToFind.sprites.front_shiny
            }
        } catch (error) {
            return error;
        }
    }
}

module.exports = pokeModel;