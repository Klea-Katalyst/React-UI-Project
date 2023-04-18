import { Component } from 'react'

import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component'
import './App.css'

class App extends Component {
  constructor() {
    super()

    this.state = {
      books: [],
      searchField: '',
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { books: users }
        })
      )
  }

  onSearchChang = (event) => {
    const searchField = event.target.value.toLocaleLowerCase()
    this.state(() => {
      return { searchField }
    })
  }

  render() {
    const { books, searchField } = this.state
    const { onSearchChange } = this

    const filteredBooks = books.filter((book) => {
      return book.name.toLocaleLowerCase().includes(searchField)
    })

    return (
      <div className='App'>
        <SearchBox
          className='books-search-box'
          onChangeHandler={onSearchChange}
          placeholder='search books'
        />
        <CardList books={filteredBooks} />
      </div>
    )
  }
}

export default App
