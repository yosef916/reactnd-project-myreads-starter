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
	  this.searchResult(this.state.query)
	}

	searchResult = (query) => {
		BooksAPI.search(query, 20).then(
			response => {
				console.log(response)
			}
		)
	}

	render() {
    const { query } = this.state.query

		return(
			<div className='search-books'>
        <div className='search-books-bar'>
          <Link to='/' className='close-search'></Link>
          <div className='search-books-input-wrapper'>
            <input 
              type='text'
              placeholder='Search by title or author'
              value={query}
              onChange={(event) => this.updateQuery(event.target.value)}
          	/>
        	</div>
    		</div>
  		</div>
		)
	}
}

export default BooksSearch