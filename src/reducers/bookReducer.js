import { GET_ALL_BOOKS, GET_BOOKS_BY_AUTHOR, GET_BOOKS_BY_GENRE, ADD_BOOK, ADD_AUTHOR, ADD_GENRE } from "../actions/types";

export const bookReducer = (state = { booksList: [], selectedBook: {} }, action) => {
    switch (action.type) {
        case GET_ALL_BOOKS:
            return {
                ...state,
                booksList: action.payload
            };

        case GET_BOOKS_BY_AUTHOR:
            return {
                ...state,
                booksList: action.payload
            };

        case GET_BOOKS_BY_GENRE:
            return {
                ...state,
                booksList: action.payload
            }

        case ADD_BOOK:
            return {
                ...state,
                booksList: [...state.booksList, action.payload]
            }
            
        default:
            return state
    }
}