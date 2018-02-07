import React from 'react';
import BooksGrid from '../../BooksGrid';

const Bookshelf = props => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{props.title}</h2>
    <div className="bookshelf-books">
      <BooksGrid
        books={props.books.filter(book => book.shelf === props.shelf)}
        onUpdateBook={props.onUpdateBook}
      />
    </div>
  </div>
);

export default Bookshelf;
