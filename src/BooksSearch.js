import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import './App.css'

class BooksSearch extends Component {
	state = {
		query: ''
	}

	updateQuery = (query) => {
		this.setState({ query: query.trim() })
	}

	render() {
    {this.state.query}

		return(
			<div className='search-books'>
			{this.state.query}
        <div className='search-books-bar'>
          <Link to='/' className='close-search'></Link>
          <div className='search-books-input-wrapper'>
            <input 
              type='text'
              placeholder='Search by title or author'
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}
          	/>
        	</div>
    		</div>
  		</div>
		)
	}
}

export default BooksSearch