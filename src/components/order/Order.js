// import axios from 'axios';
import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
// import { axios } from 'axios';

const Order = () => {
    const {state: orderData} = useLocation();
    console.log('orderData', orderData)



    
  return (
    <div>
                <>
            <section class="align-items-center section-bg">
                <div class="container">
                    <h4 data-aos="fade-up">Your order has been placed successfully.</h4>
                </div>
            </section>

            <section class="align-items-center section-bg">
                <div class="container">
                    <h4>Order - {orderData.book_name}</h4>
                    <h3>Name - {orderData.name}</h3>
                </div>
            </section>
        </>
      
    </div>
  )
}

export default Order
