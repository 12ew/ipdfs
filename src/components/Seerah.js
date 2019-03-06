import React from 'react'
import { connect } from 'react-redux';
import { fetchAllBooks, getReauth } from '../actions/index';
import { Card, Divider } from 'semantic-ui-react'
import BookItem from './BookItem'


class Seerah extends React.Component {

    componentDidMount() {
        this.props.fetchAllBooks()
        this.props.getReauth()
    }

    //Aqeedah books
    seerahBooks = () => {
        return this.props.books.booksList === [] ? null : this.props.books.booksList.filter(book => {
            return (book.genre.name === "Seerah") && (book.language === this.props.language)
        })
    }

    seerahBooksArray = () => {
        return this.seerahBooks().map(book => {
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
                        <Divider section />

                        <span><p className="section-header">{(this.props.language === "عربى") || (this.props.language === "اردو") ? "حديث" : "Seerah"}</p> <a className="see-all" href="/book">{(this.props.language === "عربى") || (this.props.language === "اردو") ? "انظر كل" : "See all"}</a></span><br /><br />
                        <Card.Group centered itemsPerRow={6}>
                            {this.seerahBooksArray()}
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

export default connect(mapStateToProps, { fetchAllBooks, getReauth })(Seerah)