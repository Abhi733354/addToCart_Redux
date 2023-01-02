    import React,{useState, useEffect} from 'react'
    import "./books.css";
    import {useNavigate, useParams, Link} from 'react-router-dom';
    import {useDispatch, useSelector} from "react-redux";
    // import {addBookToCart, addBookDetails, emptyBookFromCart} from "./actionBook"; 

    const Books = () => {
        const [getuserdata,  setUserdata] = useState([]);
        // const [getorderdata,  setOrderdata] = useState([]);
        const dispatch = useDispatch();
        const cartData = useSelector(state => state.cart);
        const loginData = useSelector(state => state.login)
        const navigate = useNavigate("");
        const {id} = useParams();
    
    const getdata = async () => {
    
        const res = await fetch(`http://localhost:8003/getbook/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
    
        const data = await res.json();
        console.log(data);
    
        if (res.status === 422 || !data) {
            console.log("error ");
    
        } else 
        {
            setUserdata(data)
            console.log(setUserdata(data))
    
        }
    
    }

    const callapi = async () => {
    
        const res = await fetch(`http://localhost:8003/placeorder`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        });
    
        const data = await res.json();
        console.log(data);
    
        if (res.status === 422 || !data) {
            console.log("error ");
    
        } else 
        {
            setUserdata(data)
            console.log(setUserdata(data))
    
        }
    
    }
    
    
    useEffect(() => {
        getdata();
        // callapi();
    }, [])
    return (
        <>
      
        <div className="col-3">
            <img src= {getuserdata.image}/>
            <h4>{getuserdata.book_name}</h4>
            <h6>&#8377;{getuserdata.book_price}</h6>
            {/* <h6>&#8377;{getuserdata.discountedprice}</h6> */}
            <button className="btn btn-sm btn-warning" onClick={()=>navigate("/order")}>OrderNow</button>
            {/* <button className="btn btn-sm btn-warning" onClick={callapi}>OrderNow</button> */}



        </div>
        </>
         )
    }
    
    export default Books;
