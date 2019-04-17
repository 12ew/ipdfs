import React, { Component } from 'react'
import { connect } from 'react-redux';
import { editBook, fetchAllAuthors, fetchAllGenres, getReauth } from '../actions/index';
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
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const id = this.props.location.state.id

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

        this.props.editBook(newBook, id)

        e.target.reset()

        this.props.history.push('/')
    }


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    componentWillMount() {
        this.props.fetchAllAuthors()
        this.props.fetchAllGenres()
        this.props.getReauth()
    }

    render() {
        const { englishTitle, arabic_title, language, num_pages, file, image, translator, about } = this.props.location.state
        return (
            (localStorage.getItem('jwt') == null) ? <Redirect to='/login' /> :
                <div className="form">
                    <br />
                    <div id="create-form-header">
                        <h3>EDIT BOOK</h3>
                    </div>
                    <br />
                    <Form id="book-form" size="small" onSubmit={this.handleSubmit}>

                        <Form.Field control={Input} defaultValue={englishTitle} label='English Title' placeholder='Aqeedah Al Waasitiyyah' id="item-name" onChange={this.handleChange} name="eng_title" />

                        <Form.Field control={Input} defaultValue={arabic_title} label='Arabic Title' placeholder='شرح حديث جبريل لشيخ الإسلام ابن تيمية' onChange={this.handleChange} name="arabic_title" />

                        {/* <Form.Select fluid label='Language' options={options} placeholder='Select language' onChange={this.handleChange} name="language"/> */}
                        <Form.Field control={Input} defaultValue={language} label='Language' placeholder='Select language' onChange={this.handleChange} name="language" />

                        <label><strong>Author</strong></label>
                        <select
                            name="author_id"
                            placeholder="Author"
                            onChange={this.handleChange}>
                            {this.props.authors.authorsList.map((item) => {
                                return (<option key={item.id} defaultValue={item.id}> {item.name} </option>);
                            })}
                        </select>
                        <br />
                        <label><strong>Genre</strong></label>
                        <select
                            name="genre_id"
                            placeholder="Genre"
                            onChange={this.handleChange}>
                            {this.props.genres.genresList.map((item) => {
                                return (<option key={item.id} defaultValue={item.id}> {item.name} </option>);
                            })}
                        </select>
                        <br />

                        <Form.Field control={Input} defaultValue={num_pages} type="number" min="0" label='Pages' placeholder='345' id="item-create-from" onChange={this.handleChange} name="num_pages" />

                        <Form.Field control={Input} defaultValue={file} min="0" label='Book PDF' placeholder='http://...' id="item-create-from" onChange={this.handleChange} name="file" />

                        < Form.Field control={Input} defaultValue={image} label='Book Cover' placeholder='http://...' id="item-create-to" onChange={this.handleChange} name="image" />

                        < Form.Field control={Input} defaultValue={translator} label='Translator' placeholder='Dawud Burbank' id="item-create-to" onChange={this.handleChange} name="translator" />

                        <br />
                        <Form.Field control={TextArea} defaultValue={about} label='About' placeholder='A book by Shaykh al Islam Ibn Taymiyyah' type="number" min="0" onChange={this.handleChange} name="about" />
                        <br />
                        <br />
                        <Button size="medium" className="ui button" type="submit">Edit</Button>
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

export default connect(mapStateToProps, { editBook, fetchAllAuthors, fetchAllGenres, getReauth })(AddBook)