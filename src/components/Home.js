import React from 'react'
import {useNavigate} from "react-router-dom";
import {HiArrowNarrowRight} from "react-icons/hi";

const Home = (props) =>{
    const navigate = useNavigate()
    const logout = () =>{
        sessionStorage.removeItem("token")
        navigate("/")
    }
    return(
        <div name={'home'} className="w-full h-screen bg-[#0a192f]">

            <div className="flex flex-col max-w-[1000px] mx-auto px-8 justify-center h-full">
                <div className="flex flex-row">
                    <div className="mr-10">
                        <p className="text-white">Hi , this is our project</p>
                        <div>
                            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-white hover:border-white hover:text-black duration-300">
                                View Work
                                <span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight className="ml-3"/></span>
                            </button>
                        </div>
                    </div>
                    {sessionStorage.token && sessionStorage.token!=="" && sessionStorage.token!==undefined ?
                        <div className="mr-10">
                            <p className="text-white">Click to Logout</p>
                            <div>
                                <button onClick={logout} className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-white hover:border-white hover:text-black duration-300">
                                    Logout
                                    <span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight className="ml-3"/></span>
                                </button>
                            </div>
                        </div>
                        :
                        <div className="flex flex-row">
                            <div className="mr-10">
                                <p className="text-white">Click to Login</p>
                                <div><a href="/login">
                                    <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-white hover:border-white hover:text-black duration-300">
                                        Login
                                        <span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight className="ml-3"/></span>
                                    </button></a>
                                </div>
                            </div>
                            <div className="mr-10">
                                <p className="text-white">Click to Register</p>
                                <div><a href="/register">
                                    <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-white hover:border-white hover:text-black duration-300">
                                        Register
                                        <span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight className="ml-3"/></span>
                                    </button></a>
                                </div>
                            </div>
                        </div>
                    }

                </div>
            </div>

        </div>
    )
}
export default Home