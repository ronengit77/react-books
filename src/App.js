import { useEffect, useContext } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import BooksContext from './context/books';

function App() {
  const  { fetchBooks }  = useContext(BooksContext);

  useEffect(() => {
    //BooksContext.fetchBooks()
    fetchBooks();
  }, []);

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;

// import { useEffect, useContext } from "react";
// import BookCreate from './components/BookCreate'
// import BookList from './components/BookList';
// import BooksContext from './context/books';
// // add, update, delete cheat sheet - https://state-updates.vercel.app/

// function App(){
//     //this line of code calls function fetchBooks
//     //from ./context/books.js
//     const {fetchBooks} = useContext(BooksContext)
    
//     //more on useEffect at codepen.io/sgrider/pen/BarEowz
//     //by default always runs of first render of page
//     useEffect( ()=>{
//         fetchBooks();
        
//     },[]); 

//     //[]=never gets called again, most usual
// //if [] is not present then useEffect gets called on every rerender
// //if [counter] then rerender everytime counter changes


//     //fetchBooks(); if placed here as such it will cause an infinit loop

// return (
// <div className='app'>
//     <BookList  />
//     <BookCreate  />
// </div>
// );
// }
// export default App;