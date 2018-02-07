import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBooksBar from './SearchBooksBar';
import SearchBooksResults from './SearchBooksResults';
import * as BooksAPI from '../../../BooksAPI';

class SearchScreen extends Component {
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
        <SearchBooksBar
          query={query}
          updateQuery={this.updateQuery}
        />
        <SearchBooksResults
          results={results}
          onUpdateBook={onUpdateBook}
        />
      </div>
    );
  }
};

export default SearchScreen;
