import React from "react";
import {useState} from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaFacebook
} from 'react-icons/fa';

const Navbar = () =>{

    const[nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return(
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 border-b-4 border-b-indigo-500">
            <div><a href="/">Home</a></div>
            <div>
                <ul className='hidden md:flex'>
                    <li><a href="/author">Authors</a></li>
                    <li><a href="/book">Books</a></li>
                    {sessionStorage.token && sessionStorage.token!=="" && sessionStorage.token !== undefined ?
                        <li><a href="/loans">User</a></li>
                    :
                        <li></li>
                    }
                </ul>
            </div>
            {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                    <li className='py-6 text-4xl'><a href="/author">Authors</a></li>
                    <li className='py-6 text-4xl'><a href="/book">Books</a></li>

                {sessionStorage.token && sessionStorage.token!=="" && sessionStorage.token !== undefined ?
                <li className='py-6 text-4xl'><a href="/loans">User</a></li>
                :
                    <li></li>
                }

                </ul>

            <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
                <ul>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 rounded-r-lg">
                        <a href="https://www.facebook.com/AGH.Krakow" className="flex justify-between items-center w-full text-gray-300">Facebook <FaFacebook size={30}/></a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-800 rounded-r-lg">
                        <a href="https://github.com/KISiM-AGH/projekt-zaliczeniowy-kozyra-korzec" className="flex justify-between items-center w-full text-gray-300">GitHub <FaGithub size={30}/></a>
                    </li>
                </ul>
            </div>

        </div>
    )
}
export default Navbar