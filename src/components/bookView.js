import React from 'react'
import { connect } from 'react-redux';
import { fetchAllBooks, getReauth } from '../actions/index';
import { Card, Divider } from 'semantic-ui-react'
import BookItem from './BookItem'


class BookView extends React.Component {

    componentDidMount() {
        this.props.fetchAllBooks()
        this.props.getReauth()
    }

    // All books
    books = () => {
        return this.props.books.booksList.map(book => {
                return <BookItem key={book.id} book={book}/>
            })
    }

    //Aqeedah books
    aqeedahBooks = () => {
        return this.props.books.booksList === [] ? null : this.props.books.booksList.filter(book => {
            return book.genre.name === "Aqeedah"
        })
    }

    aqeedahBooksArray = () => {
        return this.aqeedahBooks().map(book => {
                return <BookItem key={book.id} book={book}/>
            })
    }

    // Fiqh books
    fiqhBooks = () => {
        return this.props.books.booksList === [] ? null : this.props.books.booksList.filter(book => {
            return book.genre.name === "Fiqh"
        })
    }

    fiqhBooksArray = () => {
        return this.fiqhBooks().map(book => {
                return <BookItem key={book.id} book={book}/>
            })
    }

    // Hadeeth books
    hadeethBooks = () => {
        return this.props.books.booksList === [] ? null : this.props.books.booksList.filter(book => {
            return (book.genre.name === "Hadeeth") && (book.language === this.props.language)
        })
    }

    hadeethBooksArray = () => {
        return this.hadeethBooks().map(book => {
                return <BookItem key={book.id} book={book}/>
            })
    }

    // Tafseer books
    tafseerBooks = () => {
        return this.props.books.booksList === [] ? null : this.props.books.booksList.filter(book => {
            return book.genre.name === "Tafseer"
        })
    }

    tafseerBooksArray = () => {
        return this.tafseerBooks().map(book => {
                return <BookItem key={book.id} book={book}/>
            })
    }

    // Search/Filtered books
    filteredBooks = () => {
        return this.props.filteredBooks.map(book => {
                return <BookItem key={book.id} book={book}/>
            })
    }

    render(){
        console.log(this.props)
        return(
            <div className="booksList">
                {(this.props.searchTerm === '') ?

                <div>
                    <span><p className="section-header">Hadeeth</p> <a className="see-all" href="/book">See All</a></span><br /><br/>
                    <Card.Group centered itemsPerRow={6}>
                            {this.books()}
                    </Card.Group>

                    <Divider section />

                    <span><p className="section-header">Aqeedah</p> <a className="see-all" href="/home">See All</a></span><br/>
                    <Card.Group centered itemsPerRow={6}>
                            {this.aqeedahBooksArray()}
                    </Card.Group>

                    <Divider section />

                    <span><p className="section-header">Fiqh</p> <a className="see-all" href="/home">See All</a></span><br/>
                    <Card.Group centered itemsPerRow={6}>
                            {this.fiqhBooksArray()}
                    </Card.Group>

                    <Divider section />

                    <span><p className="section-header">Hadeeth</p> <a className="see-all" href="/home">See All</a></span><br/>
                    <Card.Group centered itemsPerRow={6}>
                            {this.hadeethBooksArray()}
                    </Card.Group>

                    <Divider section />

                    <span><p className="section-header">Tafseer</p> <a className="see-all" href="/home">See All</a></span><br/>
                    <Card.Group centered itemsPerRow={6}>
                            {this.tafseerBooksArray()}
                    </Card.Group>

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

export default connect(mapStateToProps, { fetchAllBooks, getReauth })(BookView)