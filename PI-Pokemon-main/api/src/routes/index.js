const router = require("express").Router();

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const pokeRoutes = require("./pokeRoutes");
const typeRoutes = require("./typeRoutes");

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/", pokeRoutes);
router.use("/", typeRoutes);

module.exports = router;
