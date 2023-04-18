import { Component } from 'react'

class CardList extends Component {
  render() {
    console.log(this.props.books)
    const { books } = this.props
    return (
      <div>
        {books.map((book) => (
          <h1 key={book.id}>{book.name}</h1>
        ))}
      </div>
    )
  }
}

export default CardList
