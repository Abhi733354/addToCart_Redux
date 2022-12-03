
import React, {useState} from "react"
import "./user.css"
import axios from "axios"
import { Link , useNavigate} from "react-router-dom"

const UserLogin = () => {

    const navigate = useNavigate();

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

    const login = () => {
        axios.post("http://localhost:8003/userlogin", user)
        .then(res => {
            alert(res.data.message)
            setUser(res.data.user)
            navigate("/book")
        })
    }

    return (
        <div className="register">
            <h1>User Login</h1>
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
            <div className="button" onClick={login}>Login</div>
            <div>or</div>
            <div className="button" onClick={() => navigate("/register")}>Register</div>
            </div>
    )
}

export default UserLogin;