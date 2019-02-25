import { GET_AUTHORS, ADD_AUTHOR } from "../actions/types";

export const authorReducer = (state = { authorsList: [], selectedAuthor: {} }, action) => {
    switch (action.type) {
        case GET_AUTHORS:
            return {
                ...state,
                authorsList: action.payload
            };

        case ADD_AUTHOR:
            return {
                ...state,
                authorsList: [...state.authorsList, action.payload]
            }
            
        default:
            return state
    }
}