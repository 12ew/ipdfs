import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Switch, withRouter } from 'react-router-dom'
import Header from "./components/header";
import Login from './components/login';
import { getReauth } from './actions/index'
import { connect } from 'react-redux';
import BookView from './components/BookView';

class App extends Component {

  componentDidMount() {
    this.props.getReauth()
  }
  
  render() {
    return (
      <div className="App">
        <Header className="header"/>
        
          <Switch>
            <div>

              <Route exact path="/login" component={Login}/>
              <Route exact path="/home" component={BookView}/>

            </div>

          </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // currentUser: state.authentication.currentUser
  }
}

export default withRouter(connect(mapStateToProps, { getReauth })(App));
