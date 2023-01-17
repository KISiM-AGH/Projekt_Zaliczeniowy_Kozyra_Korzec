
import React, {useEffect, useState} from 'react'
import APIService from './APIService';

const FormAuthor = (props) => {
    const[first_name, setFirstName] = useState(props.author.first_name)
    const[last_name, setLastName] = useState(props.author.last_name)
    const[birth_date, setBirthDate] = useState(props.author.birth_date)

    const updateAuthor = () => {
        APIService.updateAuthor(props.author.id, {first_name, last_name, birth_date})
            .then(resp => props.updatedData(resp))
            .catch(error => console.log(error));
    }

    const insertAuthor = () =>{
        APIService.insertAuthor({first_name, last_name, birth_date})
            .then(resp => props.insertedAuthor(resp))
            .catch(error => console.log(error))
    }

    useEffect(()=>{
        setFirstName(props.author.first_name)
        setLastName(props.author.last_name)
        setBirthDate(props.author.birth_date)
    },[props.author])

    return (
        <div>
            {props.author ? (
                <div className = "border-4 border-indigo-500 rounded p-10 mb-5">

                    <label htmlFor = "first_name" className = "block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                    <input type="text" className = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-200 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value = {first_name} placeholder = "Please enter name" onChange = {(e) => setFirstName(e.target.value)}/>

                    <label htmlFor = "last_name" className = "block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white">SurName</label>
                    <input type="text" className = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-200 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value = {last_name} placeholder = "Please enter surname" onChange = {(e) => setLastName(e.target.value)}/>

                    <label htmlFor = "birth_date" className = "block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white">Birth Date</label>
                    <input type="text" className = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-200 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value = {birth_date} placeholder = "Please enter Birth Date" onChange = {(e) => setBirthDate(e.target.value)}/>
                    {
                    props.author.id ? <div className="flex flex-col items-center mt-5"><button className = "bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full duration-300"
                                                   onClick = {updateAuthor}>Update</button></div>:
                        <div className="flex flex-col items-center mt-5"><button className = "bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-full duration-300"
                                              onClick = {insertAuthor}>Add</button></div>
                    }
                </div>
               ):null}
        </div>
    )
}
export default FormAuthor