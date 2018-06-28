import React, { Component } from 'react'
import './App.css'

//THIS IS THE REFRENCE FOR CHECK MARK/ https://github.com/HadeerFawzy/reactnd-project-myreads-starter/blob/master/src/Book.js
class Book extends Component {
  render() {
   return (
    <li className="book-list-item" key={ this.props.book.id }>
      <div className="book">
        <div className="book-top">
          { !this.props.book.imageLinks ?
            <div className="book-cover" style={{ width: 128, height: 193 }}></div> :             
            <div className="book-cover" style={{ width: 128, height: 193,
              background: `url(${this.props.book.imageLinks.thumbnail})` }}>
            </div>
          }
          <div className="book-shelf-changer">
            <select
              id="select-shelf" 
              value={this.props.book.shelf}
              onChange={(event) => { this.props.changeShelf(this.props.book, event.target.value) }}
            >
              <option disabled>Move to...</option>
              { this.props.book.shelf === 'currentlyReading' ? <option value='currentlyReading'>&#10004; Currently Reading</option> : <option value="currentlyReading">Currently Reading</option>}
              { this.props.book.shelf === 'wantToRead' ? <option value='wantToRead'>&#10004; Want To Read</option> : <option value="wantToRead">Want to Read</option>}
              { this.props.book.shelf === 'read' ? <option value="read">&#10004; Read</option> : <option value="read">Read</option>}
              { !this.props.book.shelf ? <option value="none">&#10004; None</option> : <option value="none">None</option>}
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{this.props.book.authors}</div>
      </div>
    </li>
   )
  }
}

export default Book