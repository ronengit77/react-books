import { useContext } from 'react';
import BooksContext from '../context/books';
import BookShow from './BookShow';

function BookList({ books }) {
//   const renderedBooks = books.map((book) => {
//     return (
//       <BookShow key={book.id} book={book} />
//     );
//   });

  return <div className="book-list">
    {/* {renderedBooks} */}
    </div>;
}

export default BookList;

// import { useContext } from 'react'
// import BooksContext from '../context/books'
// import BookShow from './BookShow'

// function BookList(){
//     const {books} = useContext(BooksContext)

//     // const renderBooks = books.map((book)=>{
//     //     //loops through items in books and maps each book into component structure below
//     //     //continues passing down function in onedit and ondelete
//     //     return <BookShow key={book.id} book={book}/>
//     // })
//     //console.log(books)
//     return (
        
//     <div className='book-list'>
//         {/* {renderBooks} */}
//     </div>
//     )
// }

// export default BookList;