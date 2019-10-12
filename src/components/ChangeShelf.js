import React from 'react'
import PropTypes from 'prop-types'
class ChangeShelf extends React.Component{

  static propTypes = {
        books: PropTypes.object.isRequired,
        shelfChange: PropTypes.func.isRequired
    }



  updateShelf = (e) => {

          let newValue = e.target.value;
          this.props.shelfChange(this.props.books, newValue);

    }

  render(){
    const books= this.props.books;
    console.log(books);
    // console.log(shelfChange);
    //console.log(this.props.books.shelf);
    //console.log(this.props);
    //console.log(books);
    //console.log(typeof(books));

    // for(let i = 0 ; i < books.length; i++){
    //   for (let item of i) {
    //
    //       console.log(item);
    //
    //   }
    // }
    return(
      <div className="book-shelf-changer">
        <select onChange={this.updateShelf} defaultValue= {this.props.books.shelf}>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

export default ChangeShelf
