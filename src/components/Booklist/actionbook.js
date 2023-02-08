import { Constants } from "../../redux/constants";

export const addBookToCart = (bookItem) => {
    return {
        type: Constants.ADD_BOOK_TO_CART,
        payload: {bookItem}
    }
}

export const addCount = (count) => {
    return {
        type: Constants.ADD_COUNT,
        payload: count
    }
}