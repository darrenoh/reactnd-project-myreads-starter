import React from 'react';
import { Link } from 'react-router-dom';
import Bookshelf from './Bookshelf';

const BookshelfScreen = props => (
  <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
      <div>
        <Bookshelf
          title="Currently Reading"
          shelf="currentlyReading"
          books={props.books}
          onUpdateBook={props.onUpdateBook}
        />
        <Bookshelf
          title="Want to Read"
          shelf="wantToRead"
          books={props.books}
          onUpdateBook={props.onUpdateBook}
        />
        <Bookshelf
          title="Read"
          shelf="read"
          books={props.books}
          onUpdateBook={props.onUpdateBook}
        />
      </div>
    </div>
    <div className="open-search">
      <Link to="/search">Add a book</Link>
    </div>
  </div>
);

export default BookshelfScreen;
