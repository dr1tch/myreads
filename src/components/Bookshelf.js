import React from 'react'
import Books from './Books'
//import * as BooksAPI from '../BooksAPI'
import PropTypes from 'prop-types'


class Bookshelf extends React.Component {

  static propTypes = {
        books: PropTypes.array.isRequired,
        onBookshelfChange: PropTypes.func.isRequired

    }

    handleBookshelfChange = (book, shelf) => {
      this.props.onBookshelfChange(book, shelf);
    }

  render(){
    let currentlyReading;
    const books = this.props.books;
    console.log(this.props);
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
                                book={b}
                                onHandleBookshelfChange = {this.handleBookshelfChange}
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
                              book={b}
                              onHandleBookshelfChange = {this.handleBooksheldChange}
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
                              book={b}
                              onHandleBookshelfChange = {this.handleBookshelfChange}
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
export default Bookshelf
