import { Component } from 'react'

import logo from './logo.svg'
import './App.css'

class App extends Component() {
  constructor() {
    super()

    this.state = {
      books: [],
      searchField: '',
    }
    console.log('1')
  }

  componentDidMount() {
    console.log('3')
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { books: users }
          },
          () => {
            console.log(this.state)
          }
        )
      )
  }

  render() {
    console.log('render')

    const filteredBooks = this.state.books.filter((book) => {
      return book.name.toLocaleLowerCase().include(this.state.searchField)
    })

    return (
      <div className='App'>
        <input
          className='search-box'
          type='search'
          placeholder='search books'
          onChange={(event) => {
            console.log({ startingArray: this.state.books })
            const searchField = event.target.value.toLocaleLowerCase()

            this.setState(
              () => {
                return { searchField }
              },
              () => {
                console.log({ endingArray: this.state.books })
              }
            )
          }}
        />
        {filteredBooks.map((books) => {
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
