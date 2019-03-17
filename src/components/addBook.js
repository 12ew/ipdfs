import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addNewBook, fetchAllAuthors, fetchAllGenres, getReauth } from '../actions/index';
import { Button, Form, Input, TextArea } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom';

const options = [
    { key: 'eng', text: 'English', value: 'english' },
    { key: 'ara', text: 'عربى', value: 'عربى' },
    { key: 'urd', text: 'اردو', value: 'اردو' },
    { key: 'fra', text: 'Français', value: 'français' },
    { key: 'esp', text: 'Español', value: 'español' }
]

class AddBook extends Component {
    constructor() {
        super()

        this.state = {
            eng_title: '',
            arabic_title: '',
            language: '',
            about: '',
            num_pages: '',
            translator: '',
            author_id: '',
            genre_id: '',
            harakat: '',
            image: '',
            file: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const newBook = {
            eng_title: this.state.eng_title,
            arabic_title: this.state.arabic_title,
            language: this.state.language,
            about: this.state.about,
            num_pages: this.state.num_pages,
            translator: this.state.translator,
            author_id: this.state.author_id,
            genre_id: this.state.genre_id,
            harakat: this.state.harakat,
            trip_id: this.state.trip_id,
            image: this.state.image,
            file: this.state.file
        }

    this.props.addNewBook(newBook)

    e.target.reset()

    this.props.history.push('/home')
    }


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // handleChange = (e) => {
    //     if (e.target.value) {
    //         this.setState({
    //             [e.target.name]: e.target.value
    //         })
    //     } else {
    //         const newState = { ...this.state, language: e.target.innerText };
    //         console.log(newState)
    //         this.setState({
    //             newState
    //         })
    //     }
    // }

    componentDidMount() {
        this.props.fetchAllAuthors()
        this.props.fetchAllGenres()
        this.props.getReauth()
    }

render() {
    return (
        (localStorage.getItem('jwt') == null) ? <Redirect to='/login'/> : 
        <div className = "form">
            <br/>
            <div id="create-form-header">
                <h3>ADD A NEW BOOK</h3>
            </div>
            <br/>
            <Form id="book-form" size="small" onSubmit={this.handleSubmit}>
                
                    <Form.Field control={Input} value={this.state.eng_title} label='English Title' placeholder='Aqeedah Al Waasitiyyah' id="item-name" onChange={this.handleChange} name="eng_title"/>
                    
                    <Form.Field control={Input} value={this.state.arabic_title} label='Arabic Title' placeholder='شرح حديث جبريل لشيخ الإسلام ابن تيمية' onChange={this.handleChange} name="arabic_title"/>
                    
                    {/* <Form.Select fluid label='Language' options={options} placeholder='Select language' onChange={this.handleChange} name="language"/> */}
                    <Form.Field control={Input} value={this.state.language} label='Language' placeholder='Select language'  onChange={this.handleChange} name="language" />
                    
                    <label><strong>Author</strong></label>
                    <select
                        name="author_id"
                        placeholder="Author"
                        onChange={this.handleChange}>
                        {this.props.authors.authorsList.map((item) => {
                    return (<option key={item.id} value={item.id}> {item.name} </option>);
                        })}
                    </select>
                    <br/>
                    <label><strong>Genre</strong></label>
                    <select
                        name="genre_id"
                        placeholder="Genre"
                        onChange={this.handleChange}>
                        {this.props.genres.genresList.map((item) => {
                        return (<option key={item.id} value={item.id}> {item.name} </option>);
                        })}
                    </select>
                    <br/>

                    <Form.Field control={Input} value={this.state.num_pages} type="number" min="0" label='Pages' placeholder='345' id="item-create-from" onChange={this.handleChange} name="num_pages"/>
                    
                    <Form.Field control={Input} value={this.state.file} min="0" label='Book PDF' placeholder='http://...' id="item-create-from" onChange={this.handleChange} name="file"/>
                    
                    < Form.Field control = {Input} value={this.state.image} label = 'Book Cover' placeholder = 'http://...' id = "item-create-to" onChange={this.handleChange} name="image"/>
                    
                    < Form.Field control = {Input} value={this.state.translator} label = 'Translator' placeholder = 'Dawud Burbank' id = "item-create-to" onChange={this.handleChange} name="translator"/>
                    
                <br/>
                <Form.Field control={TextArea} value={this.state.about} label='About' placeholder='A book by Shaykh al Islam Ibn Taymiyyah' type="number" min="0" onChange={this.handleChange} name="about"/>
                <br/>
                <br/>
                <Form.Field type="submit"><Button size="medium" className="ui button" type="submit">Submit</Button></Form.Field>
            </Form>
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        books: state.books,
        authors: state.authors,
        genres: state.genres,
        currentUser: state.authentication.currentUser
    }
}

export default connect(mapStateToProps, { addNewBook, fetchAllAuthors, fetchAllGenres, getReauth })(AddBook)