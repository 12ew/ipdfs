import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addNewGenre } from '../actions/index';
import { Button, Checkbox, Form, Input, Radio, Select, TextArea } from 'semantic-ui-react'

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

        console.log(this.props)
        // console.log(newBook)

    this.props.addNewGenre(newGenre)

    e.target.reset()

    this.props.history.push('/newbook')
    }


    handleChange = (e) => {
        // console.log(e.target);
        this.setState({
            [e.target.name]: e.target.value
        })
    }

render() {
    return (
        <div className = "create-form">
            <br/>
            <div id="create-form-header">
                <h3>ADD A NEW GENRE</h3>
            </div>
            <br/>
                <Form id="book-form" onSubmit={this.handleSubmit}>
                <Form size="medium">
                
                    <Form.Field control={Input} value={this.state.name} label='Name' placeholder='Aqeedah' id="item-name" onChange={this.handleChange} name="name"/>
            
                </Form>
                <br/>
                <Form.Field type="submit"><Button size="medium" className="ui button" type="submit">Submit</Button></Form.Field>
            </Form>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        genres: state.genres
    }
}

export default connect(mapStateToProps, { addNewGenre })(AddGenre)