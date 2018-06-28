import React from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import AllShelves from './AllShelves'
import BooksSearch from './BooksSearch'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    booksAr: []
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    // showSearchPage: false
  }

  //ADD componentDidMount TO REQUEST ALL THE BOOKS.
  componentDidMount () {
    BooksAPI.getAll().then((books) => {
      this.setState({ booksAr: books })
      // console.log(this.state)
    })
  }

  //
  revision = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      book.shelf = shelf

      this.setState({
        books: this.state.booksAr.filter((b) => b.id !== book.id ).concat({ book })
      })
    })
    this.componentDidMount ()
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

/*
NOTES: The search from BooksAPI is limited to a particular set of search terms.
You can find these search terms here:
https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
you don't find a specific author or title. Every search is limited by search terms.
*/