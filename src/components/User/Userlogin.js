
import React, {useState} from "react"
import "./user.css"
import axios from "axios"
import { Link , useNavigate} from "react-router-dom"
import { setLogindata,setUrl } from "./actionLogin"
import { useDispatch, useSelector } from "react-redux"

const UserLogin = () => {

    // const history = useHistory()
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const loginData = useSelector(state =>state.login);


    const [ user, setUser] = useState({
        email: "",
        password: ""
    }) 

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = async () => {
        const url = "http://localhost:8003/userlogin"
         await axios.post(url,user)
        .then(res => {
            console.log(res)
            alert(res.data.message)
            setUser(res.data.user)
            navigate("/booklist")
           
            
        
        })
    // }
    // else if( loginData.currenturl && loginData !== '/order'){
    //     navigate(loginData.currenturl)

    // }
    // else{
    //     navigate('/', response.data)
    // }
    
    }
    // .catch(error){
    //     console.log("err");
    // }

    return (
        <div className="register">
            <h1>User Login</h1>
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
            <div className="button" onClick={login}>Login</div>
            
            {/* onClick={() => navigate("/buyer")} */}
            <div>or</div>
            <div className="button" onClick={() => navigate("/register")}>Register</div>
            </div>
    )
}

export default UserLogin;