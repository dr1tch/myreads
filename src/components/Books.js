import React from 'react'
import ChangeShelf from './ChangeShelf'
import PropTypes from 'prop-types'



class Books extends React.Component {

  static propTypes = {
        book: PropTypes.object.isRequired
    }

  render(){
    const book = this.props.book;
    console.log(book);
    console.log(book.imageLinks)

    return(
      <div className="book">
        <div className="book-top">
        <div className="book-cover"
         style={{ width: 128, height: 192, backgroundImage: "url(" + book.imageLinks.thumbnail + ")" }}></div>

           <ChangeShelf/>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    )
  }
}
export default Books
