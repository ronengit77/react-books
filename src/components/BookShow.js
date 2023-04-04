import {useState,useContext} from 'react';
import BookEdit from './BookEdit';
import BooksContext from '../context/books';

function BookShow({book}){
    const [showEdit,setShowEdit]= useState(false)//init value is not to show edit mode
    const {deleteBookById}=useContext(BooksContext)

    const handleDelete = ()=>{
        deleteBookById(book.id)//passes back id to ondeletebookbyid(id) app.js
    }
    const handleUpdate = ()=>{
            setShowEdit(!showEdit)//local const
    }

    const handleSubmit = ()=>{
        setShowEdit(false)//local const
        //onEdit()//passes to onEditBookbyid(id,newTitke) back to app.js
    }

    let content = <h3>{book.title}</h3>

    if(showEdit){
        content= <BookEdit onSubmit={handleSubmit}  book={book}/>
    }

    return (
    <div className="book-show">
        <img src={`https://picsum.photos/seed/${book.id}/300/200`}/>
        <div>{content}</div>
        <div className="actions">
            <button 
            className="edit" 
            onClick={handleUpdate}>E</button>
            <button className="delete" onClick={handleDelete}/>
        </div>
        </div>
    )
}

export default BookShow;