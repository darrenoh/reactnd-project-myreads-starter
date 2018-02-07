import React from 'react';

const Book = props => (
  <li>
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${props.book.imageLinks.thumbnail}")` }}></div>
        <div className="book-shelf-changer">
          <select value={props.book.shelf} onChange={event => props.onUpdateBook(props.book, event.target.value)}>
            <option value="" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{props.book.title}</div>
      {props.book.authors && <div className="book-authors">{props.book.authors.join(', ')}</div>}
    </div>
  </li>
);

export default Book;
