import React from 'react';
import BooksGrid from '../../BooksGrid';

const SearchScreen = props => (
  <div className="search-books-results">
    <BooksGrid
      books={props.results}
      onUpdateBook={props.onUpdateBook}
    />
  </div>
);

export default SearchScreen;
