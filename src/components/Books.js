import React from 'react'
import ChangeShelf from './ChangeShelf'


class Books extends React.Component {
  render(){
    return(
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 174, backgroundImage: 'url("http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api")' }}></div>
           <ChangeShelf/>
        </div>
        <div className="book-title">Oh, the Places You'll Go!</div>
        <div className="book-authors">Seuss</div>
      </div>
    )
  }
}
export default Books
