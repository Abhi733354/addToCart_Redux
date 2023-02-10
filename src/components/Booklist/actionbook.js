import { Constants } from "../../redux/constants";

export const addBookToCart = (bookItem) => {
    return {
        type: Constants.ADD_BOOK_TO_CART,
        payload: {id:new Date().getTime().toString(),
            bookItem:bookItem
        }
    }
}

export const addCount = (count) => {
    return {
        type: Constants.ADD_COUNT,
        payload: count
    }
}