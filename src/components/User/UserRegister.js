import React, { useState } from "react"
import "./user.css"

import axios from "axios";

import { useNavigate } from "react-router-dom"

const UserRegister = () => {

    const navigate = useNavigate()

    const [ user, setUser] = useState({
        user_name: "",
        email:"",
        password:"",
        reEnterPassword: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = async() => {
        const { user_name, email, password, reEnterPassword } = user
        if( user_name && email && password && (password === reEnterPassword)){
            const url = "http://localhost:8003/userregister"
            console.log(url)
            await axios.post(url,user)
            .then( res => {
                console.log("Res", res);
                alert(res.data.message)
                navigate("/")
                console.log(res)
                console.log(user)
            }).catch(err => {
                console.log("error", err)
            })
        } else {
            alert("invlid input")
        }
        
    }

    return (
        <div className="register">
            {/* {console.log("User", user)} */}
            <h1>User Register</h1>
            <input type="text" name="user_name" value={user.user_name} placeholder="Your User Name" onChange={ handleChange }></input>
            <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }></input>
            <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange }></input>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={ handleChange }></input>
            <div className="button" onClick={register}>Register</div>
            <div>or</div>
            <div className="button" onClick={() => navigate("/")}>Login</div>
        </div>
    )
}

export default UserRegister;