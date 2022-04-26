const { Pokemon } = require("../db");
const express = require("express");
const models = require("./models");
const router = express.Router();
//Prettier le gusta pegar todo junto y me molesta por eso existe este hermoso comentario para darme paz mental
//
//
//
//Carga la base de datos si esta vacia y se fija de recibir nombre/types por query para buscarlos a la DB

router.get("/", async (req, res, next) => {
  try {
    const allList = await models.fetchPokemons();
    const count = await Pokemon.count();
    let dataBase;
    if (count === 0) {
      dataBase = await Pokemon.bulkCreate(allList);
    } else {
      dataBase = await models.getDb();
    }
    res.send(dataBase);
  } catch (err) {
    console.log(err);
    next(err);
  }
});
//Query de nombre o types

//Ruta post para crear un pokemon
router.post("/pokemons", async (req, res, next) => {
  const { name, hp, str, def, spd, height, weight, img, slot1, slot2 } =
    req.body;
  try {
    res.status(201).json({
      msg: await models.addPoke(
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
      ),
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
router.get("/pokemons", async (req, res, next) => {
  if (req.query.name) {
    const { name } = req.query;
    try {
      res.status(200).send(await models.findPoke(name));
    } catch (err) {
      next(err);
    }
  }
  // if (req.query.slot1 && req.query.slot2) {
  //   const { slot1, slot2 } = req.query;
  //   try {
  //     res.send(await models.findByType(slot1, slot2));
  //   } catch (err) {
  //     next(err);
  //   }
  // }
  // if (req.query.slot1 && !req.query.slot2) {
  //   const { slot1 } = req.query;
  //   try {
  //     res.send(await models.findByType1(slot1));
  //   } catch (err) {
  //     next(err);
  //   }
  // }

  try {
    res.json(await models.infoMainRoute());
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});
router.get("/pokemons/:id", async (req, res, next) => {
  let { id } = req.params;
  try {
    res.send(await models.findById(id));
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
