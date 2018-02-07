import React from 'react';
import Book from './Book';

const BookGrid = props => (
  <ol className="books-grid">
    {props.books.map(
      book => (
        <Book
          key={book.id}
          book={book}
          onUpdateBook={props.onUpdateBook}
        />
      )
    )}
  </ol>
);

export default BookGrid;
