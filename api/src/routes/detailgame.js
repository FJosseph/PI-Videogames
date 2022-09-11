const axios  =require('axios')
const { Videogame ,Genre} = require('../db');
const getDetail = async (id)=>{
    const detailDb = await Videogame.findOne({
       where: {
            id
        },
        include: Genre
    })
    // const genre = await detailDb.getGenre()
    // const detailDB = {
    //     ...detailDb.toJSON(),
    //     // genres: genre
    // }
    console.log(detailDb);
    if(detailDb)return detailDb.dataValues
    const detail = await axios.get(`https://api.rawg.io/api/games/${id}?key=5c5300aadbb34f8e8154f5a4ee22a589`)
    const {name, description, parent_platforms, genres, released, rating , background_image} = detail.data
    return {
        id: detail.data.id,
        name,
        description,
        fecha_lanzamiento: released,
        plataformas:parent_platforms,
        imagen: background_image,
        rating,
        genres
    }
} 
module.exports = async (req, res)=>{
    const { idVideogame } = req.params
    try {
        const detail = await getDetail(idVideogame)
        res.send(detail)
    } catch (error) {
        res.status(404).send({error: error.message})
    }
}