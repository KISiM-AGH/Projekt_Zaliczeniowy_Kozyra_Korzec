import React, {useState} from 'react'
import APIService from './APIService';
import {useNavigate} from "react-router-dom";


const FormUser = (props) => {
    const navigate = useNavigate()
    const[username, setUsername] = useState(null)
    const[email, setEmail] = useState(null)
    const[password1, setPassword1] = useState(null)
    const[password2, setPassword2] = useState(null)
    const[user, setUser] = useState(null)
    const[response, setResponse] = useState(null)

    const registerUser = () =>{
        APIService.registerUser({username, email, password1, password2})
            .then(resp => setUser(resp))
            .catch(error => console.log(error))

        if(user === 409){
            console.log(user)
            navigate("/register")
            setUsername('')
            setEmail('')
            setPassword1('')
            setPassword2('')
            setResponse('User already exists!')
        }
        else {
            if (password1 !== password2) {
                navigate("/register")
                setUsername('')
                setPassword1('')
                setResponse('Password doesn\'t match!')
            } else {
                if (user) {
                    navigate("/")
                }
            }
        }
    }

return (
        <div>
                <div className = "border-4 border-indigo-500 rounded p-10 mb-5">

                    <label htmlFor = "username" className = "block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                    <input type="text" className = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-200 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={username}  placeholder = "Please enter Username" onChange = {(e) => setUsername(e.target.value)}/>

                    <label htmlFor = "email" className = "block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white">E-mail</label>
                    <input type="text" className = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-200 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={email}  placeholder = "Please enter email" onChange = {(e) => setEmail(e.target.value)}/>

                    <label htmlFor = "password1" className = "block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input type="password" className = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-200 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={password1}  placeholder = "Please enter password" onChange = {(e) => setPassword1(e.target.value)}/>

                    <label htmlFor = "password2" className = "block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white">Repeat Password</label>
                    <input type="password" className = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-200 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={password2}  placeholder = "Please repeat password" onChange = {(e) => setPassword2(e.target.value)}/>

                    <label htmlFor = "response" className = "m-auto block mb-2 mt-2 text-sm font-medium text-red-900">{response}</label>

                        <div className="flex flex-col items-center mt-5"><button className = "bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-full duration-300"
                                              onClick={registerUser}>Register</button></div>

                </div>
        </div>
    )

}
export default FormUser