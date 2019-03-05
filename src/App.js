import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Switch, withRouter } from 'react-router-dom'
import Nav from "./components/Nav";
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
    this.props.fetchAllBooks()
    this.props.getReauth()
  }

  handleChange = (e) => {
      this.setState({
          searchTerm: e.target.value.toLowerCase()
      })
  }

  filteredBooks = () => {
      return this.props.books.booksList === [] ? null : this.props.books.booksList.filter(book => {
          return book.eng_title.toLowerCase().includes(this.state.searchTerm) || book.arabic_title.includes(this.state.searchTerm) 
          || book.author.name.toLowerCase().includes(this.state.searchTerm)
      })
  }
  
  render() {
    return (
      <div className="App">
        <Nav className="header" search={this.handleChange}/>
          <Switch>
            <div>

              <Route exact path="/login" component={Login}/>
              <Route exact path="/author" component={AddAuthor}/>
              <Route exact path="/genre" component={AddGenre}/>
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
