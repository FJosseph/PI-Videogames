const axios = require('axios');
const { Op } = require('sequelize');
const { Videogame, Genre } = require('../db');
const get = async ()=>{
        let gamesPrev = []
        let page = 1
        while (page<6) {
            const response = await axios.get(`https://api.rawg.io/api/games?key=5c5300aadbb34f8e8154f5a4ee22a589&page=${page}`)
            const res = response.data.results.map(g=>{
                return {
                    id: g.id,
                    name: g.name,
                    background_image: g.background_image,
                    genres: g.genres,
                    rating: g.rating
                }
            })   
            gamesPrev = gamesPrev.concat(res)         
            page++
        }
        const responseDb = await Videogame.findAll({include: Genre})
        console.log(gamesPrev.length);
        return gamesPrev.concat(responseDb)
}
const getName = async (name) => {
    const search = await axios.get(`https://api.rawg.io/api/games?search=${name}&key=5c5300aadbb34f8e8154f5a4ee22a589`)
    const result = search.data.results.slice(0, 15).map(g=>{
        return {
            id: g.id,
            name: g.name,
            background_image: g.background_image,
            genres: g.genres,
            rating: g.rating
        }
    })
    console.log(result);
    const searchDb = await Videogame.findAll({
        where: {
            name: {
                [Op.like]: `${name}%`
            }
        }
    })
    return result.concat(searchDb)
}

module.exports= async(req, res)=>{
    const { name }  = req.query
    try {
        if(name){
            const results = await getName(name);
            return res.send(results)
        } 
        const response = await get()
        res.send(response)
    } catch (error) {
        res.status(404).send('Hubo un error')
    }
}