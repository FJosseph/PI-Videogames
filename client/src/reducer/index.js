const initialState = {
    videogames: [],
    gamesSearched: [],
    gameDetail: {},
    gamesCreated: []
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_ALL_GAMES':
            return {
                ...state,
                videogames: action.payload
            }
        case 'GET_GAME_SEARCH':
            return {
                ...state,
                gamesSearched: action.payload
            }
        case 'GET_DETAIL_GAME':
            return {
                ...state,
                gameDetail: action.payload
            }
        default:
            return {
                ...state
            }
    }
    
}