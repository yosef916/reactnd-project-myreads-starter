import React from 'react'
import { Route, Link } from 'react-router-dom'
import AllShelves from './AllShelves'
import BooksSearch from './BooksSearch'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    booksAr: []
  }

  getBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ booksAr: books })
    })
  }

  //ADD componentDidMount TO REQUEST ALL THE BOOKS.
  componentDidMount () {
    this.getBooks()
  }

  revision = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      book.shelf = shelf

      this.setState({
        books: this.state.booksAr.filter((b) => b.id !== book.id ).concat({ book })
      })
    })
    this.componentDidMount()
  }

  /*CREATE 2 ROUTES. THE FIRST ONE TO SHOW THE MYREAD PAGE. THE SECOND ONE TO SHOW THE SEARCH PAGE.
   *DEVIDE BOOKS BASED ON IT'S SHELVE NAME.
  */
  render() {
    return (
      <div className="app">
        <Route exact path='/' render= { () => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>

            <div>
              <AllShelves booksAr={ this.state.booksAr } changeShelf={ this.revision } />
            </div>
            
            <div className="open-search">
              <Link to='/search'></Link>
            </div>
          </div>
        )}/>

        <Route exact path='/search' render= { () => (
          <div>
            <BooksSearch booksAr={ this.state.booksAr } changeShelf={ this.revision } />
          </div>
        )}/>
      </div>
    )
  }
}

export default BooksApp