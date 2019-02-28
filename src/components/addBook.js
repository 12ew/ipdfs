import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addNewBook, fetchAllAuthors, fetchAllGenres } from '../actions/index';
import { Button, Checkbox, Form, Input, Radio, Select, TextArea } from 'semantic-ui-react'

class addBook extends Component {
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
            harakat: ''
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
            trip_id: this.state.trip_id
        }

        console.log(this.props)
        // console.log(newBook)

    this.props.addNewBook(newBook)

    e.target.reset()

    this.props.history.push('/home')
    }


    handleChange = (e) => {
        console.log(e.target);
        console.log('value', e.target.value);
        console.log('name', e.target.name);
        console.log('place', e.target.placeholder);
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    componentDidMount() {
        this.props.fetchAllAuthors()
        this.props.fetchAllGenres()
    }

render() {

    // const authorOptions = () => {
    //     return this.props.authors.authorsList.map(author => {
    //         return { key: `${author.id}`, text: `${author.name}`, value: `${author.id}` }
    //     })
    // }

    // const genreOptions = () => {
    //     return this.props.genres.genresList.map(genre => {
    //         return { key: `${genre.id}`, text: `${genre.name}`, value: `${genre.id}` }
    //     })
    // }


    return (
        <div className = "create-book">
            <br/>
            <div id="create-form-header">
                <h3>ADD A NEW BOOK</h3>
            </div>
            <br/>
            <Form id="book-form" size="medium" onSubmit={this.handleSubmit}>
                {/* <Form size="medium"> */}
                
                    <Form.Field control={Input} value={this.state.eng_title} label='English Title' placeholder='Aqeedah Al Waasitiyyah' id="item-name" onChange={this.handleChange} name="eng_title"/>
                    
                    <Form.Field control={Input} value={this.state.arabic_title} label='Arabic Title' placeholder='شرح حديث جبريل لشيخ الإسلام ابن تيمية' onChange={this.handleChange} name="arabic_title"/>
                    
                    <Form.Field control={Input} value={this.state.language} label='Language' placeholder='Arabic'  onChange={this.handleChange} name="language" />

                    {/* <Form.Field control={Select}  placeholder='Author' options={authorOptions()} onChange={this.handleChange}/> */}

                    {/* <Form.Field control={Select} placeholder='Genre' options={genreOptions()} onChange={this.handleChange}/>  */}

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
                    
                    < Form.Field control = {Input} value={this.state.translator} label = 'Translator' placeholder = 'Abu Abdullaah' id = "item-create-to" onChange={this.handleChange} name="translator"/>
                    
                    <input type="file"/>

                    <input type="img"/>
                {/* </Form> */}
                <br/>
                <Form.Field control={TextArea} value={this.state.about} label='About' placeholder='A book by Shaykh al Islam Ibn Taymiyyah' type="number" min="0" onChange={this.handleChange} name="about"/>
                <br/>
                <Form.Field type="submit"><Button size="medium" className="ui button" type="submit">Submit</Button></Form.Field>
            </Form>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        books: state.books,
        authors: state.authors,
        genres: state.genres
    }
}

export default connect(mapStateToProps, { addNewBook, fetchAllAuthors, fetchAllGenres  })(addBook)