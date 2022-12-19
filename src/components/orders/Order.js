import React ,{useState, useEffect}from 'react'
import {useLocation, useNavigate, useParams} from 'react-router-dom';
import {useDispatch, useSelector}  from 'react-redux';
import { setUrl } from '../User/actionLogin';


const Order = () => {
  const [order, setOrder] = useState([]);
  const dispatch= useDispatch();
  const loginData = useSelector(state =>state.login);
  const navigate = useNavigate();
  const {state: orderData} = useLocation();
  const {id} = useParams();
  const orderapi = async () => {
    const res = await fetch(`http://localhost:8003/getdetail/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
        console.log("error ");


    } else {
        setOrder(data)
        // navigate("/order")
        // console.log("getdata");

    }


        
    }

  return (
    <>   

    <div>

    <h3>Thanx for your order</h3>
      <h3>Your order successfully done!!</h3>
    
      <h3></h3>
    </div>
    </>

  )
}

export default Order
