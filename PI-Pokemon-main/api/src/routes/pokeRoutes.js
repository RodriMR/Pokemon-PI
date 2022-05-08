const { Pokemon } = require("../db");
const express = require("express");
const models = require("./models");
const { deleteFromDb } = require("./models");
const router = express.Router();
//Prettier le gusta pegar todo junto y me molesta por eso existe este hermoso comentario para darme paz mental
//
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
    try {
      const { name } = req.query;
      const pokemon = await models.findPoke(name);
      if (pokemon === null) {
        res.status(404).send({ error: "Pokemon Not found" });
      } else {
        res.status(200).json(pokemon);
      }
    } catch (err) {
      res.status(400).send({ error: err.message });
    }
  } else if (req.query.slot1 && req.query.slot2) {
    const { slot1, slot2 } = req.query;
    try {
      res.send(await models.findByType(slot1, slot2));
    } catch (err) {
      next(err);
    }
  } else if (req.query.slot1 && !req.query.slot2) {
    const { slot1 } = req.query;
    try {
      res.send(await models.findByType1(slot1));
    } catch (err) {
      next(err);
    }
  } else {
    try {
      res.json(await Pokemon.findAll());
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
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
router.delete("/pokemons/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    let erase = await deleteFromDb(id);
    if (erase) {
      await Pokemon.destroy({ where: { idApi: id } });
      const updateList = await Pokemon.findAll();
      res.json(updateList);
    }
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

router.get("/filter", async (req, res, next) => {
  let log = req.query.by + req.query.filters;
  try {
    console.log(log);
    let filter = await models.orderBy(req.query.by, req.query.filters);

    res.status(200).json(filter);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
