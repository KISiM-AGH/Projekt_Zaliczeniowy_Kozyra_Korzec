import {useState, useEffect} from 'react';
import FormLogin from './FormLogin'

function Login(props){

    const currentUser = (current_user) => {
        props.user(current_user)
    }

return(
        <div className="flex flex-col w-full bg-[#0a192f] min-h-screen items-center">
            <div>o</div>
            <div className="mt-20 mb-10">
                <h2 className="text-white">Enter credentials to log in</h2>
            </div>
            <div className="flex flex-col items-center mb-10">
                <FormLogin user = {currentUser}/>
            </div>
            <div className="flex flex-col items-center w-[20rem] p-5 ">

            </div>
            </div>
    );

}
export default Login
