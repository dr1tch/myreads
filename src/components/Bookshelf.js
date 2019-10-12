import React from 'react'
import Books from './Books'
//import * as BooksAPI from '../BooksAPI'
import PropTypes from 'prop-types'


class Bookshelf extends React.Component {

  render(){
    let currentlyReading;
    const books = this.props.books;
    const shelfChange = this.props.bookshelfChange;

    const shelfTypes = [
      { type: 'currentlyReading', title: 'Currently Reading' },
      { type: 'wantToRead', title: 'Want to Read' },
      { type: 'read', title: 'Read' }
    ];

    // console.log(books);
    // console.log(shelfChange);


    return(

          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {currentlyReading = books.filter((book) =>
                  book.shelf === 'currentlyReading'
                ).map((b) => (
                  <li key={b.id}>
                            <Books
                                title="Currently Reading"
                                cat="currentlyReading"
                                book = {b}
                                shelfChange = {shelfChange}
                            />
                        </li>
                ))
              }
              </ol>
            </div>
            <h2 className="bookshelf-title">Want to Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
              {currentlyReading = books.filter((book) =>
                book.shelf === 'wantToRead'
              ).map((b) => (
                <li key={b.id}>
                          <Books
                              title="Want to Read"
                              cat="wantToRead"
                              book = {b}
                              shelfChange = {shelfChange}
                          />
                      </li>
              ))
            }
              </ol>
            </div>
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
              {currentlyReading = books.filter((book) =>
                book.shelf === 'read'
              ).map((b) => (
                <li key={b.id}>
                          <Books
                              title="Read"
                              cat="read"
                              book = {b}
                              shelfChange = {shelfChange}
                          />
                      </li>
              ))
            }
              </ol>
            </div>
          </div>
    )
  }
}

Bookshelf.propTypes = {
      books: PropTypes.array.isRequired,
      bookshelfChange: PropTypes.func.isRequired
  }

export default Bookshelf
