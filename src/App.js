import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Switch, withRouter } from 'react-router-dom'
import Header from "./components/Header";
import Login from './components/login';
import { fetchAllBooks, getReauth } from './actions/index'
import { connect } from 'react-redux';
import BookView from './components/BookView';
import AddBook from './components/addBook';
import AddAuthor from './components/AddAuthor';
import AddGenre from './components/AddGenre';

class App extends Component {
    constructor(){
      super()

      this.state = {
          books: [],
          filteredBooks: [],
          searchTerm: ''
      }
  }

  componentDidMount() {
    // console.log(this.props)
    this.props.fetchAllBooks()
    this.props.getReauth()
  }

  handleChange = (e) => {
    console.log(e.target.value)
      this.setState({
          searchTerm: e.target.value
      })
  }

  filteredBooks = () => {
      return this.props.books.booksList === [] ? null : this.props.books.booksList.filter(book => {
        console.log('author:', book)
          return book.eng_title.toUpperCase().includes(this.state.searchTerm) || book.arabic_title.toUpperCase().includes(this.state.searchTerm) 
          || book.author.name.toLowerCase().includes(this.state.searchTerm)
      })
  }
  
  render() {
    console.log(this.props.books.booksList)
    console.log(this.state.books)
    console.log(this.state.searchTerm)
    return (
      <div className="App">
        <Header className="header" search={this.handleChange}/>
          <Switch>
            <div>

              <Route exact path="/login" component={Login}/>
              {/* <Route exact path="/home" component={BookView} /> */}
              <Route exact path="/addauthor" component={AddAuthor}/>
              <Route exact path="/addgenre" component={AddGenre}/>
              <Route exact path="/book" component={AddBook}/>

              <Route exact path="/home" render={() => <BookView searchTerm={this.state.searchTerm} filteredBooks={this.filteredBooks()}/>} />


            </div>

          </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.books,
    currentUser: state.authentication.currentUser
  }
}

export default withRouter(connect(mapStateToProps, { fetchAllBooks, getReauth })(App));
