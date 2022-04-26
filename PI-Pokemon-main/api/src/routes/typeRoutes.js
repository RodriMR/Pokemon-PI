const router = require("express").Router();
const { Type } = require("../db");
const models = require("./models");
//
//
//
//
//
router.get("/types", async (req, res, next) => {
  try {
    const allList = await models.fetchTypes();
    const count = await Type.count();
    let dataBase;
    if (count === 0) {
      dataBase = await Type.bulkCreate(allList);
    }
    dataBase = await models.getTypesDb();
    res.send(dataBase);
  } catch (err) {
    next(err);
  }
});
module.exports = router;
