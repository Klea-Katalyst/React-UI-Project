import { Component } from 'react'

import './card.styles.css'

class Card extends Component {
  render() {
    const { id, name, email } = this.props.book
    return (
      <div className='card-container' key={id}>
        <img
          alt={` book ${name}`}
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    )
  }
}

export default Card
