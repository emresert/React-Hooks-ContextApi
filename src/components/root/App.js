import React from 'react';
import Navbar from '../navbar/Navbar';
import BookList from '../booklist/BookList';
import ThemeToggle from '../toogle/ThemeToggle';

function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <BookList></BookList>
     <ThemeToggle></ThemeToggle>
    </div>
  );
}

export default App;
