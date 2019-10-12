import React from 'react'
import * as BooksAPI from './BooksAPI'
import {Route, Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import './App.css'
import Search from './components/Search'
import Bookshelf from './components/Bookshelf'
import getAll from './Library'


class BooksApp extends React.Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  };


  state = {
    books: []
  };

  /* Set the initial state of the page by getting all books */
  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({
        books
      });
    })
  }

  changeShelf = (changedBook, shelf) => {
    BooksAPI.update(changedBook, shelf).then(response => {
      // set shelf for new or updated book
      changedBook.shelf = shelf;
      // update state with changed book
      this.setState(prevState => ({
        books: prevState.books
          // remove updated book from array
          .filter(book => book.id !== changedBook.id)
          // add updated book to array
          .concat(changedBook)
      }));
    });
    console.log(`changedBook: ${changedBook}`);
    console.log(`shelf: ${shelf}`);
    console.log(`books ${this.state.books}`);
  };




  render() {
    const { books } = this.state;
    return (
      <div className="app">

          <Route exact path='/' render={()=>(
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  <Bookshelf
                      books={books}
                      bookshelfChange={this.changeShelf}/>
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
