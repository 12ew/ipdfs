import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addNewGenre, getReauth } from '../actions/index';
import { Button, Form, Input } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom';


class AddGenre extends Component {
    constructor() {
        super()

        this.state = {
            name: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const newGenre = {
            name: this.state.name
        }

        // console.log(this.props)
        // console.log(newBook)

    this.props.addNewGenre(newGenre)

    e.target.reset()

    this.props.history.push('/genre')
    }


    handleChange = (e) => {
        // console.log(e.target);
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    componentDidMount() {
        // console.log(this.props)
        this.props.getReauth()
    }

render() {
    // console.log(this.props.currentUser)
    // console.log(localStorage.getItem('jwt'))
    
    return (
        (localStorage.getItem('jwt') == null) ? <Redirect to='/login'/> : 
        <div>
            <br/>
            <div>
                <h3>ADD A NEW GENRE</h3>
            </div>
            <br/>
                <Form id="form" onSubmit={this.handleSubmit}>
                <Form size="medium">
                
                    <Form.Field control={Input} value={this.state.name} label='Name' placeholder='Aqeedah' id="item-name" onChange={this.handleChange} name="name"/>
            
                </Form>
                <br/>
                <Form.Field type="submit"><Button size="medium" className="ui button" type="submit">Submit</Button></Form.Field>
            </Form>
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        genres: state.genres,
        currentUser: state.authentication.currentUser
    }
}

export default connect(mapStateToProps, { addNewGenre, getReauth })(AddGenre)