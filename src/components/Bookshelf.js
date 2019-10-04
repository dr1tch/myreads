import React from 'react'
import Books from './Books'
//import * as BooksAPI from '../BooksAPI'
import PropTypes from 'prop-types'


class Bookshelf extends React.Component {

  static propTypes = {
        book: PropTypes.object.isRequired
    }


  render(){
    let currentlyReading;
    const books = this.props.books;
    console.log(books);
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
                                book={b}
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
                              book={b}
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
                              book={b}
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
