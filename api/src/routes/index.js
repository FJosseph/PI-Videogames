const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const videogames = require('./videogames.js')
const detailGame = require('./detailgame.js')
const addGame = require('./addgame.js')
const genres = require('./genres.js')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/videogames', videogames)
router.get('/videogame/:idVideogame', detailGame)
router.post('/videogames', addGame)
router.get('/genres', genres)

module.exports = router;
