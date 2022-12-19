import { Constants } from "../../redux/constants";

const initialState = {
    bookCart: [],
    bookDetails: {}
};

export const reducerBook = (state = initialState, action) => {
    const {type, payload} = action;
    switch(type) {
        case Constants.ADD_BOOK_TO_CART: 
        let temp = [...state.bookCart, payload];
        return {...state, bookCart: temp}
    case Constants.ADD_BOOK_DETAILS:
        return {...state, bookDetails: payload}
    case Constants.EMPTY_BOOK_FROM_CART:
        return {...state, bookCart: []}
    default: 
        return state
    }
}