import {useState, useEffect} from 'react';
import BooksList from "./BooksList";
import FormBook from "./FormBook";
import jwt from 'jwt-decode'

function Books(props){
    const[books, setBooks] = useState([])
    const[editedBook, setEditedBook] = useState(null)

    useEffect(() =>{
        fetch('api/v1/book',{
            'method':'GET',
            headers:{
                'Content-Type': 'application/json',
            }
        })
        .then(resp => resp.json())
        .then(resp => setBooks(resp))
            .catch(error => console.log(error))
    },[])

    const editBook = (book) =>{
        setEditedBook(book)
    }

    const updatedData = (book) => {
    const new_book = books.map(my_book => {
        if(my_book.id === book.id){

            return book
        }else{
            return my_book
        }
    })
    setBooks(new_book)
  }

  const insertedBook = (book) =>{
      const new_books = [...books, book]
      setBooks(new_books)
    }
  const deleteBook = (book) => {
      const new_books = books.filter(my_book =>{
          return my_book.id !== book.id;
      })
      setBooks(new_books)
  }
  const openForm = () =>{
      setEditedBook({title:'', isbn:'', number_of_pages:'', description:'', author:'', category:'', publish_house:''})
  }

    return(
        <div className="flex flex-col w-full bg-[#0a192f] min-h-screen items-center">
            <div>o</div>
            <div className="mt-20 mb-10">
                <BooksList books = {books} editBook = {editBook} deleteBook = {deleteBook}/>
            </div>
            <div className="flex flex-col items-center mb-10">
                {sessionStorage.token && sessionStorage.token!=="" && sessionStorage.token!==undefined && JSON.parse(JSON.stringify(jwt(sessionStorage.token))).username === "admin" ?
                    <button className="mt-20 mb-10 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full duration-300 " onClick={openForm}>Insert Book</button>
                    :
                    <button disabled className="bg-blue-200  text-white py-2 px-4 rounded-full duration-300 " onClick={openForm}>Insert Book</button>
                }
            </div>
            <div className="flex flex-col items-center w-[20rem] p-5 ">
                {editedBook ? <FormBook book = {editedBook} updatedData = {updatedData} insertedBook = {insertedBook}/>: null}
            </div>
            </div>
    );
}
export default Books