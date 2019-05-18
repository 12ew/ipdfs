import React from 'react'
import { connect } from 'react-redux';
import { fetchAllBooks, getReauth } from '../actions/index';
import { Card, Divider } from 'semantic-ui-react'
import BookItem from './BookItem'


class Women extends React.Component {

    componentDidMount() {
        this.props.fetchAllBooks()
        this.props.getReauth()
    }

    // Women books
    womenBooks = () => {
        return this.props.books.booksList === [] ? null : this.props.books.booksList.filter(book => {
            return (book.genre.name === "Women") && (book.language === this.props.language)
        })
    }

    womenBooksArray = () => {
        return this.womenBooks().map(book => {
            return <BookItem key={book.id} book={book} />
        })
    }

    // Search/Filtered books
    filteredBooks = () => {
        return this.props.filteredBooks().map(book => {
            return <BookItem key={book.id} book={book} />
        })
    }

    render() {
        return (
            <div className="booksList">
                {(this.props.searchTerm === '') ?

                    <div>
                        <span><p className="section-header">{(this.props.language === "عربى") || (this.props.language === "اردو") ? "نساء" : "Women"}</p></span><br />
                        {this.womenBooksArray().length > 0 ?
                            <div><Divider section />
                                <Card.Group centered itemsPerRow={6}>
                                    {this.womenBooksArray()}
                                </Card.Group>

                                <Divider section /></div> : this.props.language === "عربى" ? <p>سنضيف كتب قريبا إن شاء الله</p> : <p>We're working on adding books to this section.</p>}
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

export default connect(mapStateToProps, { fetchAllBooks, getReauth })(Women)