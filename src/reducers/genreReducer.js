import { GET_GENRES, ADD_GENRE } from "../actions/types";

export const genreReducer = (state = { genresList: [], selectedGenre: {} }, action) => {
    switch (action.type) {
        case GET_GENRES:
            return {
                ...state,
                genresList: action.payload
            };

        case ADD_GENRE:
            return {
                ...state,
                genresList: [...state.genresList, action.payload]
            }
            
        default:
            return state
    }
}