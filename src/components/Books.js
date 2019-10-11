import React from 'react'
import ChangeShelf from './ChangeShelf'
import PropTypes from 'prop-types'



class Books extends React.Component {

  static propTypes = {
        book: PropTypes.object.isRequired,
        onHandleBookshelfChange: PropTypes.func.isRequired
    }

  handleShelfChange = (book, shelf) => {
    this.props.onHandleBookshelfChange(book, shelf);
  }
  render(){
    const book = this.props.book;
    //console.log(book);
    const { title } = this.props.book;
    console.log(this.props );
        if(this.props.book.authors !== undefined && Array.isArray(this.props.book.authors) && this.props.book.authors.length > 1) {
            this.props.book.authors = this.props.book.authors.join(' and ');
        } else if (this.props.book.authors !== undefined && Array.isArray(this.props.book.authors)) {
            this.props.book.authors = this.props.book.authors[0];
        } else if(this.props.book.authors === undefined) {
            this.props.book.authors = '';
        }

        if(this.props.book.shelf === undefined) {
            this.props.book.shelf = 'none';
        }

        if(this.props.book.imageLinks === undefined ) {
            this.props.book.imageLinks = ['thumbnail'];
            this.props.book.imageLinks.thumbnail = 'https://library.britishcouncil.org.in/static-content/isbn/noimage.jpg';
        }

    return(
      <div className="book">
        <div className="book-top">
        <div className="book-cover"
         style={{ width: 128, height: 192, backgroundImage: "url(" + book.imageLinks.thumbnail + ")" }}></div>

           <ChangeShelf
                books = {book}
                onHandleShelfChange = {this.handleShelfChange}/>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    )
  }
}
export default Books
