import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import BookshelfScreen from './BookshelfScreen';
import SearchScreen from './SearchScreen';
import * as BooksAPI from '../../BooksAPI';
import './index.css';

class BooksApp extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }

  updateBook = (book, shelf) => {
    book.shelf = shelf;
    this.setState((state) => ({
      books: state.books.filter((b) => book.id !== b.id).concat([book])
    }));
    BooksAPI.update(book, shelf);
  };

  render() {
    const { books } = this.state;

    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <BookshelfScreen
            books={books}
            onUpdateBook={this.updateBook}
          />
        )}/>
        <Route path="/search" render={() => (
          <SearchScreen
            books={books}
            onUpdateBook={this.updateBook}
          />
        )}/>
      </div>
    );
  }
};

export default BooksApp;
