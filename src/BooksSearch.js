import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {DebounceInput} from 'react-debounce-input'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import './App.css'

class BooksSearch extends Component {
	state = {
		query: '', result: []
	}

	updateQuery = (query) => {
		this.setState({ query: query })
	  if (query !== '') {
	  	 this.searchResult(this.state.query)
	  	 console.log(this.state.result)
	  } else {
	  	this.setState({ result: [] });
	  	console.log(this.state.result)
	  }
	}
	
	//If a book is assigned to a shelf on the main page and that book appears on the search page, the correct shelf should be selected on the search page
	//https://github.com/HadeerFawzy/reactnd-project-myreads-starter/blob/master/src/Search.js
	
	searchResult = (query) => {
		BooksAPI.search(query, 20).then(
			serverOutcome => {
				if (serverOutcome && serverOutcome.error === "empty query"){
          this.setState({result: []});
        } else if (serverOutcome) {
					serverOutcome.map((newbook) => (
            this.props.booksAr.map((existbook) => (
              existbook.id === newbook.id && (newbook.shelf = existbook.shelf)
            ))
          ))
					this.setState({ result: serverOutcome })
				}
			}, error  => { this.setState({ result: [] }) }
  	)
	}

	render() {
    const { query } = this.state.query

		return(
			<div className='search-books'>
        <div className='search-books-bar'>
          <Link to='/' className='close-search'>Close</Link>
          <div className='search-books-input-wrapper'>
            <DebounceInput 
              type='text'
              placeholder='Search by title or author'
              value={query}
              onChange={(event) => this.updateQuery(event.target.value)}
          	/>
        	</div>
    		</div>
    		<div className="search-books-results">
	        <ol className="books-grid">
	        	{ this.state.result.length ?
	        		(
	        			this.state.result.map((book) => (
	        			<Book key={book.id} book={book} changeShelf={this.props.changeShelf} />
	        			))
	        		)
	        		:
	        		( 
	        			<div>No books exits related to {query}</div>
        			)
          	}
	        </ol>
	      </div>
  		</div>
		)
	}
}

export default BooksSearch