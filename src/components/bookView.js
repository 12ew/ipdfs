import React from 'react'
import { connect } from 'react-redux';
import { fetchAllBooks, getReauth } from '../actions/index';
import { Card } from 'semantic-ui-react'
import BookItem from './BookItem'
import Header from "./Header";


class BookView extends React.Component {

    componentDidMount() {
        this.props.fetchAllBooks()
        this.props.getReauth()
    }

    books = () => {
        return this.props.books.booksList.map(book => {
                return <BookItem key={book.id} book={book}/>
            })
    }

    filteredBooks = () => {
        return this.props.filteredBooks.map(book => {
                return <BookItem key={book.id} book={book}/>
            })
    }

    render(){
        // console.log('props', this.props)
        // console.log('search term:', this.props.searchTerm)
        // console.log('filtered books:', this.props.filteredBooks)
        // console.log('props', this.props.books.booksList)

        return(
            <div className="booksList">
                {(this.props.searchTerm === '') ?
                <Card.Group centered itemsPerRow={4}>
                  {this.books()}
                </Card.Group> : 
        
                <Card.Group centered itemsPerRow={4}>
                  {this.filteredBooks()}
                </Card.Group>}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        books: state.books,
        currentUser: state.authentication.currentUser
    }
}

export default connect(mapStateToProps, { fetchAllBooks, getReauth })(BookView)