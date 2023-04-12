import { Component } from 'react'

import logo from './logo.svg'
import './App.css'

class App extends Component() {
  constructor() {
    super()

    this.state = {
      books: [
        { name: 'Atomic Habits', id: '12e1231e' },
        {
          name: 'The 48 Laws of Power',
          id: '12edaawe98',
        },
        {
          name: 'Verity',
          id: 'yew8w98w',
        },
        {
          name: 'The Silent Patient',
          id: '23ioj34h',
        },
      ],
    }
  }

  render() {
    return (
      <div className='App'>
        {this.state.books.map((books) => {
          return (
            <div key={books.id}>
              <h1>{books.name}</h1>
            </div>
          )
        })}
      </div>
    )
  }
}

export default App
