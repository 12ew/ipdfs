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
            return (book.genre.name === "Aqeedah") && (book.language === this.props.language)
        })
    }

    aqeedahBooksArray = () => {
        return this.aqeedahBooks().map(book => {
                return <BookItem key={book.id} book={book}/>
            })
    }

    //Arabic books
    arabicBooks = () => {
        return this.props.books.booksList === [] ? null : this.props.books.booksList.filter(book => {
            return (book.genre.name === "Arabic") && (book.language === this.props.language)
        })
    }

    arabicBooksArray = () => {
        return this.arabicBooks().map(book => {
                return <BookItem key={book.id} book={book}/>
            })
    }

    //Seerah books
    seerahBooks = () => {
        return this.props.books.booksList === [] ? null : this.props.books.booksList.filter(book => {
            return (book.genre.name === "Seerah") && (book.language === this.props.language)
        })
    }

    seerahBooksArray = () => {
        return this.seerahBooks().map(book => {
                return <BookItem key={book.id} book={book}/>
            })
    }

    //Mutoon books
    mutoonBooks = () => {
        return this.props.books.booksList === [] ? null : this.props.books.booksList.filter(book => {
            return (book.genre.name === "Mutoon") && (book.language === this.props.language)
        })
    }

    mutoonBooksArray = () => {
        return this.mutoonBooks().map(book => {
                return <BookItem key={book.id} book={book}/>
            })
    }

    // Fiqh books
    fiqhBooks = () => {
        return this.props.books.booksList === [] ? null : this.props.books.booksList.filter(book => {
            return (book.genre.name === "Fiqh") && (book.language === this.props.language)
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
            return (book.genre.name === "Tafseer") && (book.language === this.props.language)
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
        // console.log(this.props.language)
        // console.log(this.state.language)
        return(
            <div className="booksList">
                {(this.props.searchTerm === '') ?

                <div>
                    <span><p className="section-header">{(this.props.language === "عربى") || (this.props.language === "اردو") ? "حديث" : "Hadeeth"}</p> <a className="see-all" href="/hadeeth">{(this.props.language === "عربى") || (this.props.language === "اردو") ? "انظر كل" : "See all"}</a></span><br /><br/>
                    <Card.Group centered itemsPerRow={6}>
                        {this.hadeethBooksArray().reverse().slice(0, 4)}
                    </Card.Group>

                    <Divider section />

                    <span><p className="section-header">{(this.props.language === "عربى") || (this.props.language === "اردو") ? "عقيدة" : "Aqeedah"}</p> <a className="see-all" href="/aqeedah">{(this.props.language === "عربى") || (this.props.language === "اردو") ? "انظر كل" : "See all"}</a></span><br/>
                    <Card.Group centered itemsPerRow={6}>
                        {this.aqeedahBooksArray().reverse().slice(0, 4)}
                    </Card.Group>

                    <Divider section />

                    <span><p className="section-header">{(this.props.language === "عربى") || (this.props.language === "اردو") ? "فقه" : "Fiqh"}</p> <a className="see-all" href="/fiqh">{(this.props.language === "عربى") || (this.props.language === "اردو") ? "انظر كل" : "See all"}</a></span><br/>
                    <Card.Group centered itemsPerRow={6}>
                        {this.fiqhBooksArray().reverse().slice(0, 4)}
                    </Card.Group>

                    <Divider section />

                    <span><p className="section-header">{(this.props.language === "عربى") || (this.props.language === "اردو") ? "تفسير" : "Tafseer"}</p> <a className="see-all" href="/tafseer">{(this.props.language === "عربى") || (this.props.language === "اردو") ? "انظر كل" : "See all"}</a></span><br/>
                    <Card.Group centered itemsPerRow={6}>
                        {this.tafseerBooksArray().reverse().slice(0, 4)}
                    </Card.Group>

                    <Divider section />

                    <span><p className="section-header">{(this.props.language === "عربى") || (this.props.language === "اردو") ? "سيرة" : "Seerah"}</p> <a className="see-all" href="/seerah">{(this.props.language === "عربى") || (this.props.language === "اردو") ? "انظر كل" : "See all"}</a></span><br/>
                    <Card.Group centered itemsPerRow={6}>
                        {this.seerahBooksArray().reverse().slice(0, 4)}
                    </Card.Group>

                    <Divider section />

                    <span><p className="section-header">{(this.props.language === "عربى") || (this.props.language === "اردو") ? "متون" : "Mutoon"}</p> <a className="see-all" href="/mutoon">{(this.props.language === "عربى") || (this.props.language === "اردو") ? "انظر كل" : "See all"}</a></span><br/>
                    <Card.Group centered itemsPerRow={6}>
                        {this.mutoonBooksArray().reverse().slice(0, 4)}
                    </Card.Group>

                    <Divider section />

                    <span><p className="section-header">{(this.props.language === "عربى") || (this.props.language === "اردو") ? "عربية" : "Arabic"}</p> <a className="see-all" href="/arabic">{(this.props.language === "عربى") || (this.props.language === "اردو") ? "انظر كل" : "See all"}</a></span><br/>
                    <Card.Group centered itemsPerRow={6}>
                        {this.arabicBooksArray().reverse().slice(0, 4)}
                    </Card.Group>
                </div>
                : 
                <Card.Group centered itemsPerRow={6}>
                    {this.filteredBooks().reverse()}
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