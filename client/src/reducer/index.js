const initialState = {
    videogames: [],
    allVideogames: [],
    allGenres: [],
    gameDetail: {},
    gamesCreated: []
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_ALL_GAMES':
            return {
                ...state,
                videogames: action.payload,
                allVideogames: action.payload
            }
        case 'GET_GAME_SEARCH':
            return {
                ...state,
                videogames: action.payload,
                allVideogames: action.payload
            }
        case 'FILTER_GAME_BY_GENRE':
            const games = state.allVideogames
            const genre = action.payload
            const filterGame = genre === 'Todos'?games:games.filter(x => {
                const genres = x.genres.filter(z=>z.name === genre)
                // if(genres.length) return x
                return genres.length && x
            })
            return {
                ...state,
                videogames:filterGame,
            }
        case 'FILTER_BY_CREATED':
            const allGames = state.allVideogames
            const created = action.payload
            const filter  = created === 'creados'?allGames.slice(100): allGames.slice(0,100)
            return {
                ...state,
                videogames: created === 'Todos'? allGames : filter
            }
        // case 'FILTER_GAME_BY_PLATFORM':
        //     const platform = action.payload
        //     const filterPlatform = platform === 'Todos'? state.allVideogames: state.videogames.filter(x=>{
        //         const game = x.plataformas.filter(a=>a.platform.name === platform)
        //         return game.length && x
        //     })
        //     return {
        //         ...state,
        //         videogames: filterPlatform
        //     }
        case 'SORT_BY_NAME':
            const gamS = [...state.videogames]
            const sortGame = action.payload === 'asc'?gamS.sort((a,b)=>{
                if (a.name > b.name) {
                    return 1;
                }
                if (a.name < b.name) {
                    return -1;
                }
                return 0
            }): gamS.sort((a,b)=>{
                if (a.name > b.name) {
                    return -1;
                }
                if (a.name < b.name) {
                    return 1;
                }
                return 0
            })
            return {
                ...state,
                videogames: sortGame
            }
        case 'SORT_BY_RATING':
            const allVg = [...state.allVideogames]
            const ratingSort = action.payload === 'mayor'? allVg.sort((a,b)=>a.rating-b.rating):allVg.sort((a,b)=>b.rating-a.rating)
            return {
                ...state,
                videogames: action.payload === 'Todos'?state.allVideogames: ratingSort
            }
        case 'GET_DETAIL_GAME':
            return {
                ...state,
                gameDetail: action.payload
            }
        case 'ADD_GAME':
            // let data = action.payload.data
            // data.genres = 
            return {
                ...state,
                gamesCreated: [...state.gamesCreated, action.payload.data]
            }
        case 'GET_GENRES':
            return {
                ...state,
                allGenres: action.payload.data
            }
        default:
            return {
                ...state
            }
    }
    
}