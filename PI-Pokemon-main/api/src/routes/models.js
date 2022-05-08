const { Pokemon, Type } = require("../db");
const axios = require("axios");
const { Op } = require("sequelize");
module.exports = {
  //Me trae los pokemones que limite en el url y los carga en la base de datos hace un loop asincrono para meterlos en un arr que luego se crea en bulk cuando llamamos la ruta
  fetchPokemons: async () => {
    const pokemons = await axios(
      "https://pokeapi.co/api/v2/pokemon?offset=0&limit=40"
    );
    const pokemonStats = await pokemons.data.results.map((e) => {
      return e.url;
    });
    var arr = [];
    for (var i = 0; i < pokemonStats.length; i++) {
      const url = await axios(pokemonStats[i]);
      arr = [
        ...arr,
        {
          name: url.data.name,
          height: url.data.height,
          weight: url.data.weight,
          hp: url.data.stats.find((e) => e.stat.name === "hp").base_stat,
          def: url.data.stats.find((e) => e.stat.name === "defense").base_stat,
          spd: url.data.stats.find((e) => e.stat.name === "speed").base_stat,
          str: url.data.stats.find((e) => e.stat.name === "attack").base_stat,
          slot1: url.data.types[0].type.name,
          slot2: url.data.types[1]?.type.name,
          img: url.data.sprites.versions["generation-v"]["black-white"].animated
            .front_default,
        },
      ];
    }

    return arr;
  },
  //Me trae todos los typos y los carga en la base de datos
  fetchTypes: async () => {
    const types = await axios("https://pokeapi.co/api/v2/type");
    var arr = [];
    for (var i = 0; i < types.data.results.length; i++) {
      arr = [
        ...arr,
        {
          id: types.data.results[i].id,
          name: types.data.results[i].name,
          url: types.data.results[i].url,
        },
      ];
    }
    return arr;
  },
  //Agrega un pokemon si los parametros son los correctos
  addPoke: async (
    name,
    hp,
    str,
    def,
    spd,
    height,
    weight,
    img,
    slot1,
    slot2
  ) => {
    if (await Pokemon.findOne({ where: { name: name } })) {
      throw new Error(`The pokemon ${name} already exists`);
    }
    if (!name || typeof name !== "string") {
      throw new Error("The name should recieve pokewords pls");
    }
    if (!hp || typeof hp !== "number") {
      throw new Error("Pls use numbers as a value for hp");
    }
    if (!str || typeof str !== "number") {
      throw new Error("Pls use numbers as a value for str");
    }
    if (!def || typeof def !== "number") {
      throw new Error("Pls use numbers as a value for def");
    }
    if (!spd || typeof spd !== "number") {
      throw new Error("Pls use numbers as a value for spd");
    }
    if (!height || typeof height !== "number") {
      throw new Error("Pls use numbers as a value for height");
    }
    if (!weight || typeof weight !== "number") {
      throw new Error("Pls use numbers as a value for weight");
    }
    if (!img || typeof img !== "string") {
      throw new Error("Pls use a valid url");
    }
    if (!img.includes("https")) {
      throw new Error("Pls use a valid url");
    }
    if (name && hp && str && def && spd && height && weight && img && slot1) {
      const creado = await Pokemon.create({
        name: name.toLowerCase(),
        hp: hp,
        str: str,
        def: def,
        spd: spd,
        height: height,
        weight: weight,
        img: img,
        slot1: slot1,
        slot2: slot2 ? slot2 : null,
        createdInDb: true,
      });

      // if (await Pokemon.findOne({ where: { name: name } })) {
      //   return "Pokemon created succesfully";
      // } else {
      //   throw new Error("Theres been an issue pls try again");
      // }
      const relation1 = await Type.findOne({
        where: {
          name: slot1,
        },
      });
      const relation2 = await Type.findOne({
        where: {
          name: slot2,
        },
      });

      await creado.addType(relation1);
      await creado.addType(relation2);
      return "Pokemon created succesfully";
    }
  },
  findPoke: async (name) => {
    let pokemon = name.toLowerCase();
    if (!pokemon) {
      throw new Error(`Pokemon ${name} doesnt exists`);
    }
    return await Pokemon.findAll({
      where: { name: { [Op.iLike]: `%${pokemon}%` } },
    });
  },
  findByType: async (slot1, slot2) => {
    return await Pokemon.findAll({
      where: {
        slot1: { [Op.iLike]: `%${slot1}%` },
        slot2: { [Op.iLike]: `%${slot2}%` },
      },
    });
  },
  findByType1: async (slot1) => {
    return await Pokemon.findAll({
      where: { slot1: { [Op.iLike]: `%${slot1}%` }, slot2: null },
    });
  },
  // findByType2: async (slot2) => {
  //   return await Pokemon.findAll({ where: { slot1:null,slot2: slot2 } });
  // },
  infoMainRoute: async () => {
    const frontPokemon = await Pokemon.findAll({
      where: { idApi: { [Op.lte]: 40 } },
      attributes: {
        exclude: [
          "hp",
          "str",
          "def",
          "spd",
          "height",
          "weight",
          "id",
          "createdAt",
          "updatedAt",
        ],
      },
    });
    return frontPokemon;
  },
  findById: async (idApi) => {
    let findId = await Pokemon.findAll({
      where: { idApi: idApi },
      attributes: {
        exclude: ["idApi"],
      },
      include: {
        model: Type,
        attribute: ["name", "id"],
        through: {
          attribute: [],
        },
      },
    });
    if (!findId) {
      throw new Error("Couldn't find the id you where looking for");
    }
    return findId;
  },
  deleteFromDb: async function (idApi) {
    var erase = await Pokemon.findOne({
      where: { createdInDb: true, idApi: idApi },
    });
    if (erase) {
      if (erase.dataValues.createdInDb) {
        return erase;
      }
    } else {
      throw new Error("Can't delete original pokemons!");
    }
  },

  getDb: async function () {
    return await Pokemon.findAll({
      attribute: ["name"],
      include: {
        model: Type,
      },
    });
  },

  getTypesDb: async function () {
    return await Type.findAll();
  },

  orderBy: async function (by, filters) {
    let ordenado = await Pokemon.findAll({
      order: [[`${by}`, `${filters}`]],
    });

    return ordenado;
  },
};
//module.exports = { allPokemons, getDb, allTypes, getTypesDb };
