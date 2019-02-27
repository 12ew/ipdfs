import React from 'react'
import { connect } from 'react-redux';
import { fetchAllBooks } from '../actions/index';
import { Card } from 'semantic-ui-react'
import BookItem from './BookItem'


class BookView extends React.Component {

    componentDidMount() {
        this.props.fetchAllBooks()
    }

    render(){
        console.log('props', this.props)
        // console.log('props', this.props.books.booksList)

        return(
            <div className="booksList">
            <bookItem />
                <Card.Group centered itemsPerRow={4}>
                    {this.props.books.booksList.map(book => {
                        return <BookItem key={book.id} book={book}/>
                    })}
                </Card.Group>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        books: state.books,
        // currentUser: state.authentication.currentUser
    }
}

export default connect(mapStateToProps, { fetchAllBooks })(BookView)