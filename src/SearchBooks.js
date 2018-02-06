import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Book from './Book';
import * as BooksAPI from './BooksAPI';

class SearchBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onUpdateBook: PropTypes.func.isRequired
  };

  state = {
    query: '',
    results: []
  };

  updateQuery = (query) => {
    const { books } = this.props;

    query = query.trim();
    this.setState({ query });
    if (query) {
      BooksAPI.search(query).then(results => {
        this.setState({ results: results.map(result => {
          result.shelf = 'none';
          books.filter(book => result.id === book.id).map(book => {
            result = book;
            return book;
          });
          return result;
        })});
      })
    } else {
      this.setState({ results: [] });
    }
  };

  render() {
    const { onUpdateBook } = this.props;
    const { query, results } = this.state;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={event => this.updateQuery(event.target.value)}
            />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {results.map(result => (
              <Book
                book={result}
                onUpdateBook={onUpdateBook}
              />
            ))}
          </ol>
        </div>
      </div>
    );
  }
};

export default SearchBooks;
