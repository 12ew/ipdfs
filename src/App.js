import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Switch, withRouter } from 'react-router-dom'
import Nav from "./components/Nav";
import Login from './components/login';
import { fetchAllBooks, getReauth } from './actions/index'
import { connect } from 'react-redux';
import BookView from './components/bookView';
import AddBook from './components/addBook';
import EditBook from './components/EditBook';
import AddAuthor from './components/AddAuthor';
import AddGenre from './components/AddGenre';
import Aqeedah from './components/Aqeedah';
import Fiqh from './components/Fiqh';
import Hadeeth from './components/Hadeeth';
import Arabic from './components/Arabic';
import Mutoon from './components/Mutoon';
import Seerah from './components/Seerah';
import Tafseer from './components/Tafseer';
import Women from './components/Women';
import Children from './components/Children';

class App extends Component {
    constructor(){
      super()

      this.state = {
          books: [],
          filteredBooks: [],
          searchTerm: '',
          selectedLanguage: 'عربى'
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

  handleLanguage = (e) => {
    this.setState({
      selectedLanguage: e.target.innerText
    })
  }

  filteredBooks = () => {
      return this.props.books.booksList === [] ? null : this.props.books.booksList.filter(book => {
          return (book.eng_title.toLowerCase().includes(this.state.searchTerm) || book.arabic_title.includes(this.state.searchTerm) 
            || book.author.name.toLowerCase().includes(this.state.searchTerm)) && (book.language === this.state.selectedLanguage)
      })
  }
  
  render() {
    return (
      <div className="App">
        <Nav className="header" search={this.handleChange} language={this.handleLanguage} selectedLanguage={this.state.selectedLanguage}/>
          <Switch>
            <div>

              <Route exact path="/login" component={Login}/>
              <Route exact path="/author" component={AddAuthor}/>
              <Route exact path="/genre" component={AddGenre}/>
              <Route exact path="/book" component={AddBook}/>
              <Route exact path="/editbook/:id" component={EditBook}/>

              <Route exact path="/" render={() => <BookView searchTerm={this.state.searchTerm} filteredBooks={this.filteredBooks} language={this.state.selectedLanguage} />} />

              <Route exact path="/aqeedah" render={() => <Aqeedah searchTerm={this.state.searchTerm} filteredBooks={this.filteredBooks} language={this.state.selectedLanguage} />} />
              <Route exact path="/fiqh" render={() => <Fiqh searchTerm={this.state.searchTerm} filteredBooks={this.filteredBooks} language={this.state.selectedLanguage} />} />
              <Route exact path="/hadeeth" render={() => <Hadeeth searchTerm={this.state.searchTerm} filteredBooks={this.filteredBooks} language={this.state.selectedLanguage} />} />
              <Route exact path="/mutoon" render={() => <Mutoon searchTerm={this.state.searchTerm} filteredBooks={this.filteredBooks} language={this.state.selectedLanguage} />} />
              <Route exact path="/tafseer" render={() => <Tafseer searchTerm={this.state.searchTerm} filteredBooks={this.filteredBooks} language={this.state.selectedLanguage} />} />
              <Route exact path="/seerah" render={() => <Seerah searchTerm={this.state.searchTerm} filteredBooks={this.filteredBooks} language={this.state.selectedLanguage} />} />
              <Route exact path="/arabic" render={() => <Arabic searchTerm={this.state.searchTerm} filteredBooks={this.filteredBooks} language={this.state.selectedLanguage} />} />
              <Route exact path="/women" render={() => <Women searchTerm={this.state.searchTerm} filteredBooks={this.filteredBooks} language={this.state.selectedLanguage} />} />
              <Route exact path="/children" render={() => <Children searchTerm={this.state.searchTerm} filteredBooks={this.filteredBooks} language={this.state.selectedLanguage} />} />

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
