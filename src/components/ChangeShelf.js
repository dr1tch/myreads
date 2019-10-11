import React from 'react'
import PropTypes from 'prop-types'
class ChangeShelf extends React.Component{

  static propTypes = {
        book: PropTypes.object.isRequired,
        onHandleShelfChange: PropTypes.func.isRequired
    }



  shelfChange = (e) => {
    let newShelf = e.target.value;
    this.props.onHandleShelfChange(this, newShelf);
    console.log(newShelf);

  }
  render(){
    const books = this.props.book;
    console.log(this.props);
    //console.log(books);
    return(
      <div className="book-shelf-changer">
        <select onChange={this.shelfChange}>
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
