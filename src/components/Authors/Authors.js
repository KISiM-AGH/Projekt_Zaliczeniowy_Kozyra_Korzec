import {useState, useEffect} from 'react';
import AuthorsList from './AuthorsList'
import FormAuthor from './FormAuthor'
import jwt from "jwt-decode";

function Authors() {
  const [authors, setAuthors] = useState([])
  const [editedAuthor, setEditedAuthor] = useState(null)


  useEffect(() => {
    fetch('api/v1/author',{
        'method':'GET',
        headers:{
            'Content-Type': 'application/json',
        }
    })
    .then(resp => resp.json())
    .then(resp => setAuthors(resp))
    .catch(error => console.log(error))
  },[])

  const editAuthor = (author) => {
    setEditedAuthor(author)
  }

  const updatedData = (author) => {
    const new_author = authors.map(my_author => {
        if(my_author.id === author.id){

            return author
        }else{
            return my_author
        }
    })
    setAuthors(new_author)
  }

  const insertedAuthor = (author) =>{
      const new_authors = [...authors, author]
      setAuthors(new_authors)
  }

  const deleteAuthor = (author) => {
      const new_authors = authors.filter(my_author =>{
          return my_author.id !== author.id;
      })
      setAuthors(new_authors)
  }

  const openForm = () =>{
      setEditedAuthor({first_name:'', last_name:'', birth_date:''})
  }

    return(
        <div className="flex flex-col w-full bg-[#0a192f] min-h-screen items-center">
            <div>o</div>
            <div className="mt-20 mb-10">
                <AuthorsList authors = {authors} editAuthor = {editAuthor} deleteAuthor = {deleteAuthor}/>
            </div>
            <div className="flex flex-col items-center mb-10">
                {sessionStorage.token && sessionStorage.token!=="" && sessionStorage.token!==undefined && JSON.parse(JSON.stringify(jwt(sessionStorage.token))).username === "admin" ?
                    <button className="bg-blue-800 hover:bg-blue-500 text-white py-2 px-4 rounded-full duration-300 " onClick={openForm}>Insert Author</button>
                :
                    <button disabled className="bg-blue-500 text-black py-2 px-4 rounded-full" onClick={openForm}>Insert Author</button>
                }
            </div>
            <div className="flex flex-col items-center w-[20rem] p-5 ">
                {editedAuthor ? <FormAuthor author = {editedAuthor} updatedData = {updatedData} insertedAuthor = {insertedAuthor}/>: null}
            </div>
            </div>
    );
}

export default Authors;
