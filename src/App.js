import './App.css';

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import {Routes, Route} from 'react-router-dom'
import {useNavigate} from "react-router-dom";
import Authors from "./components/Authors/Authors";
import Books from "./components/Books/Books";
import Auth from "./components/Auth/Auth";
import Login from "./components/Login/Login";
import Loans from "./components/Loans/Loans";
import {useState} from "react";
import jwt from "jwt-decode";


function App() {
    const navigate = useNavigate()
    const [user,setCurrentUser] = useState(null)
    const dateNow = new Date()

    const currentUser = (current_user) =>{
        setCurrentUser(current_user)
    }

    if(sessionStorage.getItem("token") === 'Unauthorized'){
        console.log(sessionStorage.getItem("token"))
        sessionStorage.removeItem("token")
    }

    if(sessionStorage.token) {

        if (JSON.parse(JSON.stringify(jwt(sessionStorage.token))).exp*1000 > dateNow.getTime()) {
            console.log("you are logged in")
            console.log(JSON.parse(JSON.stringify(jwt(sessionStorage.token))).exp*1000)
            console.log(dateNow.getTime())
        } else {
            console.log("you need to log in")
            sessionStorage.removeItem("token")
        }
    }


    return(
        <div>
            <Navbar/>
            <Routes>
                <Route path="/" element={ <Home current_user = {user}/> }/>
                <Route path="/author" element={ <Authors/> }/>
                <Route path="/book" element={ <Books current_user = {user}/> }/>
                <Route path="/register" element={ <Auth/> }/>
                <Route path="/login" element={ <Login user = {currentUser}/>  }/>
                <Route path="/loans" element={ <Loans/> }></Route>
                <Route path="/find"></Route>
            </Routes>
            </div>
    );
}

export default App;
