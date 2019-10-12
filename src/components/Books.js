import React from 'react'
import ChangeShelf from './ChangeShelf'
import PropTypes from 'prop-types'



class Books extends React.Component {



  render(){
    const {book, shelfChange} = this.props;
     console.log(book);
     console.log(shelfChange);
    const { title } = this.props.book;
    //console.log(this.props.book.shelf);
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
                shelfChange = {shelfChange}/>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    )
  }
}

Books.propTypes = {
      book: PropTypes.object.isRequired,
      shelfChange: PropTypes.func.isRequired
  }
export default Books
