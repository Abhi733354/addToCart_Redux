import React from 'react'
// import "./cart.css";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import  axios  from 'axios';

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartData = useSelector(state => state.cart);

  const placeorder = async() => {
    try{
      const url = 'http://localhost:8003/placeorder';
      const tempobj = {
        book_name: cartData.booksDetails.book_name,
        book_price: cartData.booksDetails.book_price,
        booktItem: cartData.bookCart
      }
      const response = await axios.post(url, tempobj);
      if(response.status === 201) { 
        navigate();
      }

    }
    catch(err){
      console.log('failed try again');

    }
  }

  return (
    
    <div class="table_responsive">
    <table>
      <thead>
        <tr>
          <th>product Id</th>
          <th>Product Name</th>
          <th>Product Price</th>
         
        </tr>
      </thead>
      <tbody> 
        {
          cartData.bookCart && cartData.bookCart.map((data) => {
            
            return (
            <tr>
                
              <td>{data.book_id}</td>
              <td>{data.book_name}</td>
              <td>{data.book_price}</td>
            </tr>
            

            )
            

          })
          
        }

      </tbody>
    </table> {
      cartData.bookCart.length > 0 &&(
    
    <button className="button" onClick={placeorder}>Place Order</button>
      )
  }
  </div>
  // </>
  )
}

export default Cart
