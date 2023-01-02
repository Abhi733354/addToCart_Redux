import React ,{useState, useEffect}from 'react'
import axios from "axios";
import {useLocation, useNavigate, useParams} from 'react-router-dom';
import {useDispatch, useSelector}  from 'react-redux';
import { setUrl } from '../User/actionLogin';


const Order = () => {
  // const [order, setOrder] = useState([]);
  // const dispatch= useDispatch();
  // const loginData = useSelector(state =>state.login);
  // const navigate = useNavigate();
  // const {state: orderData} = useLocation();
  // const {id} = useParams();
  // const orderapi = async () => {
  //   const res = await fetch(`http://localhost:8000/getdetail/${id}`, {
  //       method: "GET",
  //       headers: {
  //           "Content-Type": "application/json"
  //       }
  //   });

  //   const data = await res.json();
  //   console.log(data);

  //   if (res.status === 422 || !data) {
  //       console.log("error ");


  //   } else {
      

  //   }


        
  //   }
  const navigate = useNavigate()

    const [ order, setOrder] = useState({
        book_name: "",
        book_price:"",
        user_name:"",
        address: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setOrder({
            ...order,
            [name]: value
        })
    }

    const OrderNow = async() => {
        const { book_name, book_price, user_name, address } = order
        if( book_name && book_price && user_name && address){
            const url = "http://localhost:8003/order"
            console.log(url)
            await axios.post(url,order)
            .then( res => {
                console.log("Res", res);
                alert(res.data.message)
                // navigate("/")
                console.log(res)
                console.log(order)
            }).catch(err => {
                console.log("error", err)
            })
        } else {
            alert("invlid input")
        }
        
    }


  return (
    <>   

    <div>

    <h3>Thanx for your order</h3>
      {/* <h3>Your order successfully done!!</h3> */}
    </div>

    <div className="register">
            {/* {console.log("User", user)} */}
            <h1>Enter Your Order Details </h1>
            <input type="text" name="book_name" value={order.book_name} placeholder="Your Bok Name" onChange={ handleChange }></input>
            <input type="text" name="book_price" value={order.book_price} placeholder="Your Book price" onChange={ handleChange }></input>
            <input type="text" name="user_name" value={order.user_name} placeholder="Your User Name" onChange={ handleChange }></input>
            <input type="text" name="address" value={order.address} placeholder="Your Address" onChange={ handleChange }></input>
            <div className="button" onClick={OrderNow}>placeorder</div>
        </div>
    </>

  )
}

export default Order
