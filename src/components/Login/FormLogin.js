import React, { useState} from 'react'
import {useNavigate} from 'react-router-dom';
import APIService from './APIService';
import jwt from "jwt-decode";

const FormLogin = (props) => {

    const navigate = useNavigate()
    const[username, setUsername] = useState(null)
    const[password1, setPassword1] = useState(null)
    const[response, setResponse] = useState(null)

    const token = sessionStorage.getItem("token");


    const loginUser = () =>{
        APIService.loginUser({username, password1})
            .then((resp) => {
                console.log(resp)
                if(resp.error){
                    sessionStorage.setItem("token",resp.error)
                    alert("Bad Password")
                }
                else {
                    sessionStorage.setItem("token", resp.access_token)
                }
            })
            //.then((resp) => props.user(resp.user))
            .catch(error => console.log(error))

        if(sessionStorage.token === "Unauthorized"){
            setTimeout(function () {
                navigate("/login")
            }, 3000);

        }
        else {
            setTimeout(function () {
                window.location.reload();
            }, 1000);
        }
    }


return (

        <div>
            {token && token!=="" && token!==undefined ?
                <div className="text-green-300">You are logged in</div>
                :
                <div className = "border-4 border-indigo-500 rounded p-10 mb-5">

                    <label htmlFor = "username" className = "block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                    <input type="text" className = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-200 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={username}  placeholder = "Please enter Username" onChange = {(e) => setUsername(e.target.value)}/>

                    <label htmlFor = "password1" className = "block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input type="password" className = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-200 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={password1}  placeholder = "Please enter password" onChange = {(e) => setPassword1(e.target.value)}/>

                    <label htmlFor = "response" className = "m-auto block mb-2 mt-2 text-sm font-medium text-red-900">{response}</label>
                        <div className="flex flex-col items-center mt-5"><button className = "bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-full duration-300"
                                              onClick={loginUser}>Log in</button></div>

                </div>
            }
        </div>

    )

}
export default FormLogin