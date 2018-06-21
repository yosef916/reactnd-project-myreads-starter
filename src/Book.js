import React, { Component } from 'react'
import AllShelves from './AllShelves'
import App from './App'
import './App.css'

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
          <select id="select-shelf" value={ this.props.book.shelf }></select>
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