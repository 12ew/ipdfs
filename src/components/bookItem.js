import { Card, Button, Header, Modal, Icon, Image , Item, Label, CardMeta } from 'semantic-ui-react'
import React from 'react'


class BookItem extends React.Component {

    state = { open: false }

        show = dimmer => () => this.setState({ dimmer, open: true })
        close = () => this.setState({ open: false })
        
    render(){
        console.log('books', this.props.book)
        const { open, dimmer } = this.state
        const { eng_title, arabic_title, about, language, translator, num_pages } = this.props.book
        return(
        <div className="book-card">
                <Card>
                    <Card.Content>
                        {/* <Image floated='right' size='mini' src='/images/avatar/large/steve.jpg' /> */}
                        <div>
                            <Card.Header style={{color: "red"}}><strong>{eng_title.substr(0,55)}</strong></Card.Header>
                            <br/>
                            <Card.Meta><strong>{arabic_title}</strong></Card.Meta>
                            <br/>
                            <Card.Meta><strong>Pages: {num_pages}</strong></Card.Meta>
                            <br/>
                            <p>Language: <strong style={{color: "teal"}}>{language}</strong></p>
                            <br/>
                            {/* <h4>From: </h4> */}
                            <p>Translator: <strong style={{color: "teal"}}>{translator}</strong></p>
                            {/* <h4>To: </h4> */}
                            <br/>
                            <Card.Description>
                            <p>About: <strong>{about.substr(0,100)}</strong></p>
                            
                            </Card.Description><br/>
                        </div>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                        <Button basic color='green' onClick={this.show(true)}>
                            Download
                        </Button>
                        </div>
                    </Card.Content>
                </Card>
        </div>
        )
    }
}
export default BookItem