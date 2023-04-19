import { Component } from 'react'
import './card-list.styles.css'
import Card from '../card/card.component'

class CardList extends Component {
  render() {
    const { books } = this.props
    return (
      <div className='card-list'>
        {books.map((book) => {
          return <Card book={book} />
        })}
      </div>
    )
  }
}

export default CardList
