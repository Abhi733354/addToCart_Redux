import { Constants } from "../../redux/constants";

const initialState = {
    bookCart:[
        //  {
        //     image:"https://pbs.twimg.com/media/Ca29a8jXEAA7XRK?format=jpg&name=medium",
        //     book_id:1,
        //     book_name: "Harry Potter",
        //     book_price: 225
        //  }
    ],
    // count: {}
}
export const reducerBook = (state=initialState, action) => {
    let newState
    const {type, payload} = action;
    switch(type) {
        case Constants.ADD_BOOK_TO_CART:
            let temp = [...state.bookCart, payload]
            return {...state, bookCart: temp}
        case Constants.ADD_COUNT:
            return  newState = state + action.payload

    // switch(action.type){
    //     case Constants.ADD_BOOK_TO_CART:
    //      const {id, bookItem} = action.payload
    //      return{
    //         ...state,
    //         bookCart: [
    //             ...state.bookCart,
    //             {
    //                 id: id,
    //                 bookItem:bookItem
    //             }
    //         ],
    //         // isEdit: action.isEdit,
    //      }
            default: return state
    }
}