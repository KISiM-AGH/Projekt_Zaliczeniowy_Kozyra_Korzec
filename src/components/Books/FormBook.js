import React, {useEffect, useState} from 'react'
import APIService from './APIService';

const FormBook = (props) => {
    const[title, setTitle] = useState(props.book.title)
    const[isbn, setIsbn] = useState(props.book.isbn)
    const[number_of_pages, setNop] = useState(props.book.number_of_pages)
    const[cena, setCena] = useState(props.book.cena)
    const[description, setDesc] = useState(props.book.description)
    const[author_id, setAid] = useState(props.book.author_id)
    const[category_id, setCid] = useState(props.book.category_id)
    const[publish_house_id, setPhid] = useState(props.book.publish_house_id)

    const updateBook = () => {
        APIService.updateBook(props.book.id, {title, isbn, number_of_pages, cena, description, author_id, category_id, publish_house_id})
            .then(resp => props.updatedData(resp))
            .catch(error => console.log(error))
        console.log(props.book.author_id)
    }

    const insertBook = () =>{
        APIService.insertBook({title, isbn, number_of_pages, description, cena, author_id, category_id, publish_house_id})
            .then(resp => props.insertedBook(resp))
            .catch(error => console.log(error))
    }

    useEffect(()=>{
        setTitle(props.book.title)
        setIsbn(props.book.isbn)
        setNop(props.book.number_of_pages)
        setCena(props.book.cena)
        setDesc(props.book.description)
        setAid(props.book.author.id)
        setCid(props.book.category.id)
        setPhid(props.book.publish_house.id)
    },[props.book])

    return (
        <div>
            {props.book ? (
                <div className="flex flex-row border-4 border-indigo-500 rounded p-10 mb-5">

                    <div className = "border-4 border-indigo-500 rounded p-10 mb-5">

                        <label htmlFor = "title" className = "block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                        <input type="text" className = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-200 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value = {title} placeholder = "Please enter title" onChange = {(e) => setTitle(e.target.value)}/>

                        <label htmlFor = "isbn" className = "block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white">ISBN</label>
                        <input type="text" className = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-200 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value = {isbn} placeholder = "Please enter ISBN" onChange = {(e) => setIsbn(e.target.value)}/>

                        <label htmlFor = "number_of_pages" className = "block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white">Number Of Pages</label>
                        <input type="text" className = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-200 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value = {number_of_pages} placeholder = "Please enter number of pages" onChange = {(e) => setNop(e.target.value)}/>

                        <label htmlFor = "cena" className = "block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                        <input type="text" className = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-200 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value = {cena} placeholder = "Please enter price" onChange = {(e) => setCena(e.target.value)}/>

                        <label htmlFor = "author" className = "block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white">Author ID</label>
                        <input type="text" className = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-200 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value = {author_id} placeholder = "Please enter author ID" onChange = {(e) => setAid(e.target.value)}/>

                        <label htmlFor = "category" className = "block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white">Category ID</label>
                        <input type="text" className = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-200 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value = {category_id} placeholder = "Please enter category ID" onChange = {(e) => setCid(e.target.value)}/>

                        <label htmlFor = "publish_house" className = "block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white">Publish House ID</label>
                        <input type="text" className = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-200 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value = {publish_house_id} placeholder = "Please enter publish house" onChange = {(e) => setPhid(e.target.value)}/>

                        {
                        props.book.id ? <div className="flex flex-col items-center mt-5"><button className = "bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full duration-300"
                                                       onClick = {updateBook}>Update</button></div>:
                            <div className="flex flex-col items-center mt-5"><button className = "bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-full duration-300"
                                                  onClick = {insertBook}>Add</button></div>
                        }
                    </div>
                    <div className="ml-10"><label htmlFor = "description" className = "block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                    <textarea rows={40} cols={40} className = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value = {description} placeholder = "Please enter Decription" onChange = {(e) => setDesc(e.target.value)}>
                    </textarea></div>
                </div>
               ):null}
        </div>
    )
}
export default FormBook