import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import './App.css'

class BooksSearch extends Component {
	state = {
		query: '', result: []
	}

	updateQuery = (query) => {
	  if (query) {
	  	this.setState({ query: query.trim() })
  		this.searchResult(this.state.query)
	  } else {
	  	this.setState({ result: [] })
	  	console.log(this.state.result)
	  }
	}

	searchResult = (query) => {
		BooksAPI.search(query, 20).then(
			serverOutcome => {
				if (!serverOutcome){
					this.setState({ result: [] })
					// console.log(this.state.result)
				} else if (serverOutcome) {
					this.setState({ result: serverOutcome })
					// this.setState({ result: [] })
				}
			},	error  => {
				this.setState({ result: [] })
			}
  	)
	}

	render() {
    const { query } = this.state.query

		return(
			<div className='search-books'>
        <div className='search-books-bar'>
          <Link to='/' className='close-search'>Close</Link>
          <div className='search-books-input-wrapper'>
            <input 
              type='text'
              placeholder='Search by title or author'
              value={query}
              onChange={(event) => this.updateQuery(event.target.value)}
          	/>
        	</div>
    		</div>

	        <ol className="books-grid">
	        	{ this.state.result.length ?
	        		(
	        			this.state.result.map((book) => (
	        			<Book key={book.id} book={book}/>
	        			))
	        		)
	        		:
	        		( 
	        			<div>No books exits related to {query}</div>
        			)
          	}
	        </ol>

  		</div>
		)
	}
}

export default BooksSearch