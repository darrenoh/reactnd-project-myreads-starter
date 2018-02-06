import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books })
    })
  }

  updateBook = (book, shelf) => {
    book.shelf = shelf
    this.setState((state) => ({
      books: state.books.filter((b) => book.id !== b.id).concat([book])
    }))
    BooksAPI.update(book, shelf)
  }

  render() {
    const { books } = this.state

    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ListBooks
            books={books}
            onUpdateBook={this.updateBook}
          />
        )}/>
        <Route path="/search" render={() => (
          <SearchBooks/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
