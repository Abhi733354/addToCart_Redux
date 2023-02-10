import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import {list} from "../Booklist"


function Cart () {
    const cartData = useSelector((state) => state.reducerBook.bookCart);
    
    // const [data, setData] = useState([cartData])
    console.log("cartData:",cartData)
    return(
        <div>
            {/* <h2>{cartData.book_name}</h2> */}
        {
           cartData.map((elem, index) => {
                return(
                    <>
                    <div>{index}</div>
                    <img src={elem.image} class="menu-img img-fluid image-max-height" alt="not found"/>
                    <h4>{elem.book_name}</h4>
                    <h5>&#8377;{elem.book_price}</h5>
                    {/* <h6> discountedprice &#8377;{data.discountedprice}</h6> */}
                   
                    </>
                )
            })
        }
        <button >OrderNow</button>
        
        </div>
    )
}
export default Cart;

