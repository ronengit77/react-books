import { useState,useContext } from "react"; // when do I use curly braces and when no braces?
import BooksContext from '../context/books';

function BookCreate(){
    const [title,setTitle]=useState('')
    const {createBook} = useContext(BooksContext) //what does the curly braces mean here?

    const handleChange = (e)=>{ //ensures title is updated through useState
        setTitle(e.target.value)
    }

    const handleSubmit = (e)=>{ //called from render below and passes title to onCreate in app.js
        e.preventDefault()
        createBook(title)
        setTitle('')
    }
    return (<div className="book-create">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input className="input" value={title} onChange={handleChange}/>
            <button className="button">Create Book</button>
        </form>
        </div>);
}

export default BookCreate;