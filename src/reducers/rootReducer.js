import { combineReducers } from "redux";
import { bookReducer } from "./bookReducer";
import { genreReducer } from "./genreReducer";
import { authorReducer } from "./authorReducer";
import { userReducer } from "./userReducer";

const rootReducer = combineReducers({
    books:bookReducer,
    authors: authorReducer,
    genres: genreReducer,
    users: userReducer
});

export default rootReducer