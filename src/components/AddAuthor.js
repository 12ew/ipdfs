import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addNewAuthor, getReauth } from '../actions/index';
import { Button, Form, Input, TextArea } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom';

class AddAuthor extends Component {
    constructor() {
        super()

        this.state = {
            name: '',
            bio: '',
            yod: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const newAuthor = {
            name: this.state.name,
            bio: this.state.bio,
            yod: this.state.yod
        }

    this.props.addNewAuthor(newAuthor)

    e.target.reset()

    this.props.history.push('/book')
    }


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    componentDidMount() {
        this.props.getReauth()
    }


render() {
    return (
        (localStorage.getItem('jwt') == null) ? <Redirect to='/login'/> : 
        <div className = "create-book">
            <br/>
            <div id="create-form-header">
                <h3>ADD A NEW AUTHOR</h3>
            </div>
            <br/>
                <Form id="book-form" onSubmit={this.handleSubmit}>
                <Form size="medium">
                
                    <Form.Field control={Input} value={this.state.name} label='Name' placeholder='Ibn Taymiyyah' id="item-name" onChange={this.handleChange} name="name"/>
                    
                    <Form.Field control={Input} value={this.state.yod} label='Year of death' placeholder='379'  onChange={this.handleChange} name="yod" />
                    
                    <Form.Field control={TextArea} value={this.state.bio} label='Bio' placeholder='He was an imam and one of the greatest scholars to have walked on the earth.' onChange={this.handleChange} name="bio"/>
            
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
        authors: state.authors,
        currentUser: state.authentication.currentUser
    }
}

export default connect(mapStateToProps, { addNewAuthor, getReauth })(AddAuthor)