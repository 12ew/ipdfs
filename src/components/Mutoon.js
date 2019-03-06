import React from 'react'
import { connect } from 'react-redux';
import { fetchAllBooks, getReauth } from '../actions/index';
import { Card, Divider } from 'semantic-ui-react'
import BookItem from './BookItem'


class Mutoon extends React.Component {

    componentDidMount() {
        this.props.fetchAllBooks()
        this.props.getReauth()
    }

    //Aqeedah books
    mutoonBooks = () => {
        return this.props.books.booksList === [] ? null : this.props.books.booksList.filter(book => {
            return (book.genre.name === "Mutoon") && (book.language === this.props.language)
        })
    }

    mutoonBooksArray = () => {
        return this.mutoonBooks().map(book => {
            return <BookItem key={book.id} book={book} />
        })
    }

    // Search/Filtered books
    filteredBooks = () => {
        return this.props.filteredBooks.map(book => {
            return <BookItem key={book.id} book={book} />
        })
    }

    render() {
        // console.log(this.props.language)
        // console.log(this.state.language)
        return (
            <div className="booksList">
                {(this.props.searchTerm === '') ?

                    <div>
                        <span><p className="section-header">{(this.props.language === "عربى") || (this.props.language === "اردو") ? "متون" : "Mutoon"}</p></span><br />
                        <Divider section />
                        <Card.Group centered itemsPerRow={6}>
                            {this.mutoonBooksArray()}
                        </Card.Group>

                        <Divider section />
                    </div>
                    :
                    <Card.Group centered itemsPerRow={6}>
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

export default connect(mapStateToProps, { fetchAllBooks, getReauth })(Mutoon)