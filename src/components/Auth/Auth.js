import {useState, useEffect} from 'react';
import FormUser from './FormUser'

function Auth(){
    const [current_user, setCurrentUser] = useState(null)

    const currentUser = (user) =>{
        setCurrentUser(user)
    }
return(
        <div className="flex flex-col w-full bg-[#0a192f] min-h-screen items-center">
            <div>o</div>
            <div className="mt-20 mb-10">
                <h2 className="text-white">Enter Credentials to Register</h2>
            </div>
            <div className="flex flex-col items-center mb-10">
                <FormUser user = {currentUser}/>
            </div>
            <div className="flex flex-col items-center w-[20rem] p-5 ">

            </div>
            </div>
    );

}

export default Auth