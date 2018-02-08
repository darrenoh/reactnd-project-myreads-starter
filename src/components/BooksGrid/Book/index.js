import React from 'react';
import BookCover from './BookCover';

const Book = props => (
  <li>
    <div className="book">
      <div className="book-top">
        <BookCover thumbnail={props.book.imageLinks.thumbnail} />
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
      {props.book.authors && <div className="book-authors" dangerouslySetInnerHTML={{
        __html: props.book.authors.join('<br>')
      }}></div>}
    </div>
  </li>
);

export default Book;
