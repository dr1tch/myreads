import React from 'react'
import Books from './Books'
import * as BooksAPI from '../BooksAPI'


class Bookshelf extends React.Component {

  render(){
    return(

          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading - Want to Read - Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">

                <Books/>
              </ol>
            </div>
          </div>

    )
  }
}
export default Bookshelf
