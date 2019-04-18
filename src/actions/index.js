import {
    GET_ALL_BOOKS,
    GET_BOOKS_BY_AUTHOR,
    GET_BOOKS_BY_GENRE,
    ADD_BOOK,
    EDIT_BOOK,
    ADD_AUTHOR,
    GET_AUTHORS,
    ADD_GENRE,
    GET_GENRES,
    GET_USER,
    LOGOUT
} from './types'

// FETCH ALL BOOKS

export function fetchAllBooks() {
    return (dispatch) => {
        fetch(`https://spdfs.herokuapp.com/api/v1/books`)
        .then(resp => resp.json())
        .then(data => {
            dispatch({ type: GET_ALL_BOOKS, payload: data })
        });
    }
}

// FETCH ALL BOOKS BY AUTHOR

export function fetchAllBooksByAuthor(id) {
    return (dispatch) => {
        fetch(`https://spdfs.herokuapp.com/api/v1/authors/${id}/books`)
        .then(resp => resp.json())
        .then(data => {
            dispatch({ type: GET_BOOKS_BY_AUTHOR, payload: data })
        });
    }
}

// FETCH ALL AUTHORS

export function fetchAllAuthors() {
    return (dispatch) => {
        fetch(`https://spdfs.herokuapp.com/api/v1/authors`)
        .then(resp => resp.json())
        .then(data => {
            dispatch({ type: GET_AUTHORS, payload: data })
        });
    }
}

// FETCH ALL BOOKS BY GENRE

export function fetchAllBooksByGenre(id) {
    return (dispatch) => {
        fetch(`https://spdfs.herokuapp.com/api/v1/genres/${id}/books`)
        .then(resp => resp.json())
        .then(data => {
            dispatch({ type: GET_BOOKS_BY_GENRE, payload: data })
        });
    }
}

// FETCH ALL GENRES

export function fetchAllGenres() {
    return (dispatch) => {
        fetch(`https://spdfs.herokuapp.com/api/v1/genres`)
        .then(resp => resp.json())
        .then(data => {
            dispatch({ type: GET_GENRES, payload: data })
        });
    }
}

// ADD NEW BOOK

export function addNewBook(newBook) {
    return(dispatch) => {
        fetch(`https://spdfs.herokuapp.com/api/v1/books`, {
            method: 'POST',
            headers: { 
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(newBook)
        })
        .then(resp => resp.json())
        .then(book => { 
            dispatch({ type: ADD_BOOK, payload: book })
        })
    }
}

// EDIT BOOK

export function editBook(newBook, id) {
    return(dispatch) => {
        fetch(`https://spdfs.herokuapp.com/api/v1/books/${id}`, {
            method: 'PUT',
            mode: 'cors',
            headers: { 
                'Content-type': 'application/json',
                'Accept': 'application/json',
                "Access-Control-Request-Headers": "*",
            },
            body: JSON.stringify(newBook)
        })
        .then(resp => resp.json())
        .then(book => { 
            dispatch({ type: EDIT_BOOK, payload: book })
        })
    }
}

// ADD NEW AUTHOR

export function addNewAuthor(newAuthor) {
    return(dispatch) => {
        fetch(`https://spdfs.herokuapp.com/api/v1/authors`, {
            method: 'POST',
            headers: { 
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(newAuthor)
        })
        .then(resp => resp.json())
        .then(author => { 
            dispatch({ type: ADD_AUTHOR, payload: author })
        })
    }
}

// ADD NEW GENRE

export function addNewGenre(newGenre) {
    return(dispatch) => {
        fetch(`https://spdfs.herokuapp.com/api/v1/genres`, {
            method: 'POST',
            headers: { 
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(newGenre)
        })
        .then(resp => resp.json())
        .then(genre => { 
            dispatch({ type: ADD_GENRE, payload: genre })
        })
    }
}

// GET LOGIN 

export function getLogin(user) {
    return {
        type: GET_USER,
        payload: user
    }
}

// GET CURRENT USER

export function getReauth() {
    const token = localStorage.getItem('jwt')

    if (token) {
        const options = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': token
            }
        }
        return(dispatch) => {
            fetch(`https://spdfs.herokuapp.com/api/v1/reauth`, options)
            .then(resp => resp.json())
            .then(user => {
                dispatch(getLogin(user))
            })
        }
    } else {
        return (dispatch) => {}
    }
}

// LOGOUT USER

export function logout() {
    return {
        type: LOGOUT
    }
}
