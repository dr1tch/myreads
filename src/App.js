import React from 'react'
import * as BooksAPI from './BooksAPI'
import {Route, Link} from 'react-router-dom'
import './App.css'
import Search from './components/Search'
import Bookshelf from './components/Bookshelf'


class BooksApp extends React.Component {
  state = {

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
