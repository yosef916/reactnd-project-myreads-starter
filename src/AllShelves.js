import React, { Component } from 'react'
import Book from './Book'

class AllShelves extends Component { 
  render() {
    // console.log('Props', this.props)
    return(
      <div className="list-books-content">
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {this.props.booksAr.map((book) => (
                  book.shelf === "currentlyReading" && (
                    <Book key={book.id} book={book} changeShelf={this.props.changeShelf}/>
                  )
                ))}
              </ol>
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {this.props.booksAr.map((book) => (
                  book.shelf === "wantToRead" && (
                    <Book key={book.id} book={book} changeShelf={this.props.changeShelf}/>
                  )
                ))}
              </ol>
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {this.props.booksAr.map((book) => (
                  book.shelf === "read" && (
                    <Book key={book.id} book={book} changeShelf={this.props.changeShelf}/>
                  )
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AllShelves