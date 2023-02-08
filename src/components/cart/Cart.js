import React from 'react'
import { useDispatch, useSelector } from 'react-redux';


function Cart () {
    // const cartData = useSelector(state => state.reducerBook.bookCart);
    const cartData = useSelector((state) => state.reducerBook.bookCart);
    console.log("Data:",cartData)
    return(
        <div>
            {/* <h2>{cartData.book_name}</h2> */}
        {
            cartData.map((elem, index) => {
                return(
                    <>
                    <div key={index}>
                    <img src={elem.image} class="menu-img img-fluid image-max-height" alt=""/>
                    <h4>{elem.book_name}</h4>
                    <h5>&#8377;{elem.book_price}</h5>
                    {/* <h6> discountedprice &#8377;{data.discountedprice}</h6> */}
                    </div>
                    </>
                )
            })
        }
        <button >OrderNow</button>
        
        </div>
    )
}
export default Cart;

