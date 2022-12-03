    import React,{useState, useEffect} from 'react'
    import "./books.css";
    import { useNavigate } from 'react-router-dom';
    import {useDispatch, useSelector} from "react-redux";
    import {addBookToCart, addBookDetails, emptyBookFromCart} from "./actionBook"; 
    const Books = () => {
        const [getuserdata,  setUserdata] = useState([]);
        const dispatch = useDispatch();
        const cartData = useSelector(state => state.cart);
        const navigate = useNavigate();
    
        const getdata = async () => {
    
        const res = await fetch("http://localhost:8003/getbooks", {
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
            setUserdata(data)
            console.log("get data");
    
        }
    
    }
    const searchHandle = async (event) => {
        let name = event.target.value;
        let result = await fetch(`http://localhost:8003/search/${name}`);
        if(result){
            setUserdata(result) 
        }

    }

    const addCartFn = (bookItem) => {

        let booksDetails = {};
        booksDetails.book_id = getuserdata.book_id;
        booksDetails.book_name = getuserdata.book_name;
        booksDetails.book_price = getuserdata.book_price;

        if(booksDetails.book_id === cartData.booksDetails.book_id){
        dispatch(addBookToCart(bookItem));
        dispatch(addBookDetails(booksDetails))
        }
        else{
        dispatch(emptyBookFromCart());
        dispatch(addBookToCart(bookItem));
        dispatch(addBookDetails(booksDetails));
        }

    }
    
    
    useEffect(() => {
        getdata();
    }, [])
    return (
        <>
        <div className='bg-light'>
        <div className='search-box'>
            <button className="button" onClick={() => navigate("/cart")}>Cart</button>
            <input type="text" placeholder="Search Books" onChange ={searchHandle}/>
            </div>
        <div className="flex-box" data-aos="fade-up">
            <div className="row">
            <div class="row gy-5">
        {
        getuserdata && getuserdata.map((data) => {
            return(
                <div>
                    <img src={data.image} className=" menu-img img-fluid image-max-height" alt=""/>
                    <h4>{data.book_name}</h4>
                    <h5>&#8377;{data.book_price}</h5>
                    <button className="btn btn-sm btn-warning" onClick={() => addCartFn(data)}>Add to Cart</button>
                    </div>
                )
            })
        }
        </div>
        </div>
        
            </div>
            </div>
        </>
         )
    }
    
    export default Books;
