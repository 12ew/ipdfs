import React from 'react'
import { connect } from 'react-redux';
import { fetchAllBooks, getReauth } from '../actions/index';
import { Card, Divider } from 'semantic-ui-react'
import BookItem from './BookItem'


class Hadeeth extends React.Component {

    componentDidMount() {
        this.props.fetchAllBooks()
        this.props.getReauth()
    }

    // Hadeeth books
    hadeethBooks = () => {
        return this.props.books.booksList === [] ? null : this.props.books.booksList.filter(book => {
            return (book.genre.name === "Hadeeth") && (book.language === this.props.language)
        })
    }

    hadeethBooksArray = () => {
        return this.hadeethBooks().map(book => {
            console.log("Book in hadeeth books array:", book)
            return <BookItem key={book.id} book={book} />
        })
    }

    // Search/Filtered books
    filteredBooks = () => {
        return this.props.filteredBooks().map(book => {
            console.log("Book in hadeeth:", book)
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
                        <span><p className="section-header">{(this.props.language === "عربى") || (this.props.language === "اردو") ? "حديث" : "Hadeeth"}</p></span><br />
                        
                        { this.hadeethBooksArray().length > 0 ?
                        <div><Divider section />
                        <Card.Group centered itemsPerRow={6}>
                            {this.hadeethBooksArray()}
                        </Card.Group>

                                <Divider section /></div> : this.props.language === "عربى" ? <p>سنضيف كتب قريبا إن شاء الله</p> : <p>We're working on adding books to this section.</p> }

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

export default connect(mapStateToProps, { fetchAllBooks, getReauth })(Hadeeth)