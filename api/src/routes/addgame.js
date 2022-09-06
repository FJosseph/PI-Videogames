const axios = require('axios')
const { Videogame, Genre } = require('../db');
require('sequelize')
let id = 1000000;
module.exports = async (req, res) => {
    const { name, description, plataformas ,fecha_lanzamiento, rating ,genres} = req.body
    if(!name || !description || !plataformas || !genres)return res.status(404).send('Se requieren más valores')
    if(rating > 5 || rating < 0)return res.status(404).send('Rating inválido')
    try {
        const add = await Videogame.create({
            id: id++,
            name,
            description,
            fecha_lanzamiento,
            rating,
            plataformas: plataformas.map(p =>{
                return {name: p}
            })
        })
        let géneros = await Genre.findAll()
        géneros = await géneros.map(x=>x.dataValues)
        const idGenres = genres.map(g=>géneros.filter(x=> x.name === g)[0].id)
        console.log(idGenres);
        await add.addGenres(idGenres)
        res.status(201).send(add)
    } catch (error) {
        res.status(404).send({error: error.message})
    }
}