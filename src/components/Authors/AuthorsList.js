
import React from 'react'
import APIService from "./APIService";
import {useNavigate} from "react-router-dom";
import jwt from "jwt-decode";

function AuthorsList(props){

    const navigate = useNavigate()
    const editAuthor = (author) => {
        props.editAuthor(author)
    }

    const deleteAuthor = (author) => {
        APIService.DeleteAuthor(author.id)
            .then(() => props.deleteAuthor(author))
    }

    return (
        <div>
            {props.authors && props.authors.map(author =>{
              return (
                <div key = {author.id} className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">

                    <table className=" w-full table-fixed text-sm text-left text-gray-500 dark:text-gray-400">
                        <tbody>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td className="px-6 py-4">
                                    {author.first_name} {author.last_name}
                                </td>
                                {sessionStorage.token && sessionStorage.token!=="" && sessionStorage.token!==undefined && JSON.parse(JSON.stringify(jwt(sessionStorage.token))).username === "admin" ?
                                        <td>
                                            <button className ="btn btn-primary"
                                            onClick = {() => editAuthor(author)}>
                                            Update</button>
                                        </td>
                                    :
                                        <td>
                                            Unavailable
                                        </td>
                                }
                                {sessionStorage.token && sessionStorage.token!=="" && sessionStorage.token!==undefined && JSON.parse(JSON.stringify(jwt(sessionStorage.token))).username === "admin" ?
                                        <td>
                                            <button className ="btn btn-danger"
                                            onClick={() => deleteAuthor(author)}>Delete</button>
                                        </td>
                                    :
                                        <td>
                                            Unavailable
                                        </td>
                                }

                            </tr>
                        </tbody>
                    </table>
                </div>
              )
          })}
        </div>
    )
}
export default AuthorsList
