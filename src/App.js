import React from 'react'
import * as BooksAPI from './BooksAPI'
import {Route, Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import './App.css'
import Search from './components/Search'
import Bookshelf from './components/Bookshelf'
import getAll from './Library'

class BooksApp extends React.Component {

  bookshelves = [
    { key: 'currentlyReading', name: 'Currently Reading' },
    { key: 'wantToRead', name: 'Want to Read' },
    { key: 'read', name: 'Have Read' },
  ];

  state = {
    books: getAll;
  };

  render() {
    return (
      <div className="app">

          <Route exact path='/' render={()=>(
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  <Bookshelf/>
                </div>
              </div>
              <div className="open-search">
                <Link className="open-search" to='/search'>Add a book</Link>
              </div>
            </div>

          )}/>
          <Route path='/search' render={() => (
            <Search/>
          )}/>
          </div>





    )
  }
}

export default BooksApp
