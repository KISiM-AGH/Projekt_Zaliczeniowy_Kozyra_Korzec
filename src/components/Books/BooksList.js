import React from 'react'
import APIService from "../Books/APIService";
import jwt from "jwt-decode";


function BooksList(props){

    const editBook = (book) =>{
        props.editBook(book)
    }

    const deleteBook = (book) => {
        APIService.deleteBook(book.id)
            .then(() => props.deleteBook(book))
    }

    const alertLoan = (book) => {
        alert("Are you sure to loan this book?")
        APIService.loanBook(book.id)
            .catch(error => console.log(error))
    }


    return (
        <div>

            {props.books && props.books.map(book =>{

              return (
                <div key = {book.id} className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
                    <table className=" w-full table-fixed text-sm text-left text-gray-500 dark:text-gray-400">
                        <tbody>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td className="px-6 py-4">
                                    {book.title}
                                </td>
                                {sessionStorage.token && sessionStorage.token!=="" && sessionStorage.token!==undefined && JSON.parse(JSON.stringify(jwt(sessionStorage.token))).username === "admin" ?
                                        <td>
                                            <button className ="text-blue-300"
                                            onClick = {() => editBook(book)}>
                                            Update</button>
                                        </td>
                                    :
                                        <td>
                                            Please log in to manage
                                        </td>
                                }
                                {sessionStorage.token && sessionStorage.token!=="" && sessionStorage.token!==undefined && JSON.parse(JSON.stringify(jwt(sessionStorage.token))).username === "admin" ?
                                        <td>
                                            <button className ="text-red-600"
                                            onClick={() => deleteBook(book)}>
                                                Delete
                                            </button>
                                        </td>
                                    :
                                        <td>
                                            Please log in to manage
                                        </td>
                                }
                                {sessionStorage.token && sessionStorage.token!=="" && sessionStorage.token!==undefined ?
                                        <td>
                                            <button className ="text-yellow-300"
                                            onClick={() => alertLoan(book)}>
                                                Loan
                                            </button>
                                        </td>
                                    :
                                        <td>
                                            Please log in to loan
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
export default BooksList