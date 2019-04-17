import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import { getLogin } from '../actions/index';
import { connect } from 'react-redux';


class Login extends React.Component {
    state = {
        email: '',
        password: ''
    };

    handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
    };

    handleSubmit = (e) => {
      e.preventDefault();
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(this.state)
      }
      fetch(`https://spdfs.herokuapp.com/api/v1/login`, options)
      .then(resp => resp.json())
      .then(user => {
          localStorage.setItem('jwt', user.jwt)
          this.props.getLogin(user)
          // this.props.history.push('/')
      })
    };


  render(){
    if (!this.props.currentUser.id) {
    return(
      <div id="form">
        
        <div id="">
          <hr/>
            <br/>
              <div><h3>Sunnah PDFs</h3></div>
            <br/>
          <hr/>
        </div>

        <h1>Login</h1>

        <br/>
          <Form size="small" className="form" onSubmit={this.handleSubmit}>

              <Form.Field>
                  <label style={{color: "black"}}>Email</label>
                  <input type="email" placeholder='abdullah@gmail.com' onChange={this.handleChange} name="email"/>
              </Form.Field>

              <Form.Field>
                  <label style={{color: "black"}}>Password</label>
                  <input type="password" placeholder='******' onChange={this.handleChange} name="password"/>
              </Form.Field>

              <Form.Field type="submit"><Button size="tiny" className="ui color1 button" type="submit">Login</Button></Form.Field>
          </Form>
      </div>
    ); } else {
          return <Redirect to='/book' />
        }
    }
}
const mapStateToProps = (state) => {
  return {
    currentUser: state.authentication.currentUser
  }
}
export default connect(mapStateToProps, { getLogin })(Login)