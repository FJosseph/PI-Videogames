export function getGames() {
    return async function (dispatch) {
        return fetch('http://localhost:3001/videogames')
        .then(res=> res.json())
        .then(data=> dispatch({
            type: 'GET_ALL_GAMES',
            payload: data
        }))
        // try {
        //     const videogames = await fetch('http://localhost:3001/videogames')
        //     return dispatch({
        //         type: 'GET_ALL_GAMES',
        //         payload: videogames.json()
        //     })
        // } catch (e) {
        //     console.log(e);
        // }        
    }
}

export function getGamesBySearch(name) {
    return async function (dispatch) {
        return fetch(`http://localhost:3001/videogames?name=${name}`)
        .then(res=> res.json())
        .then(data=> dispatch({
            type: 'GET_GAME_SEARCH',
            payload: data
        }))
        // try {
        //     let videogames = await fetch(`http://localhost:3001/videogames?name=${name}`)
        //     let data = videogames.json()
        //     return dispatch({
        //         type: 'GET_GAME_SEARCH',
        //         payload: data
        //     })
        // } catch (e) {
        //     console.log(e);
        // }
    }    
}

export function gameDetail(id) {
    return async function (dispatch) {
        return fetch(`http://localhost:3001/videogame/${id}`)
        .then(res=> res.json())
        .then(data=> dispatch({
            type: 'GET_DETAIL_GAME',
            payload: data
        }))
        // try {
        //     const detail = await fetch(`http://localhost:3001/videogame/${id}`)
        //     return dispatch({
        //         type: 'GET_DETAIL_GAME',
        //         payload: detail.json()
        //     })
        // } catch (e) {
            
        // }        
    }    
}

export function addGame(body) {
    return function (dispatch) {
        
    }    
}