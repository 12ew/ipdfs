import { Card, Button, Header, Modal, Icon, Image , Item, Label, CardMeta } from 'semantic-ui-react'
import React from 'react'
import Book from '../bookcover.svg'


class BookItem extends React.Component {
        
    render(){
        console.log('books', this.props.book)
        const { eng_title, arabic_title, about, language, translator, num_pages, file } = this.props.book
        return(
        <div className="book-card">
                <Card>
                    <Card.Content extra>
                        <div>
                        <Header size="tiny" style={{color: "black"}}><strong>{eng_title}</strong></Header>
                        </div>
                    </Card.Content>
                    <Card.Content>
                        <Image floated="left" class="ui small rounded image" src={Book} />
                        <div class="book-info" floated="right">
                            
                            <Card.Meta size='medium'><strong style={{color: "black"}}>{arabic_title}</strong></Card.Meta>
                            <br/>
                            <Card.Meta>Language: <strong style={{color: "green"}}>{language}</strong></Card.Meta>
                            <br/>
                            <Card.Meta>Pages: {num_pages}</Card.Meta>
                        </div>
                    </Card.Content>
                    <Card.Content extra>
                        <div>
                        <a href="www.google.com" target="_blank">
                            <Button basic color='green'>
                                <Icon name="download"/>Download
                            </Button>
                        </a>
                        </div>
                    </Card.Content>
                </Card>
                <br/>
        </div>
        )
    }
}
export default BookItem