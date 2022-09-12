const axios = require('axios')
const { Genre } = require('../db')
const getGenre = async () =>{
    const get = await axios.get(`https://api.rawg.io/api/genres?key=5c5300aadbb34f8e8154f5a4ee22a589`)
    const genres = get.data.results.map(g=>{
        return {
            id: g.id,
            name: g.name,
        }
    })
    console.log(genres);
    return genres
}
module.exports = async (req, res)=>{
    try {
        const genres = await getGenre()
       await genres.map(x=>Genre.findOrCreate({where: x}))
        res.json(genres)
    } catch (error) {
        res.status(404).send({error: error.message})
    }
}