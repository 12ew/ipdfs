import React from 'react'
import { Card, Button, Header, Icon, Image } from 'semantic-ui-react'

class BookItem extends React.Component {
        
    render(){
        const { eng_title, arabic_title, about, language, translator, num_pages, file, image } = this.props.book
        const englishTitle = eng_title.toLowerCase()
                            .split(' ').map((s) => s.charAt(0)
                            .toUpperCase() + s.substring(1))
                            .join(' ');
        return(
        <div className="book-card">
                <Card>
                    <Card.Content extra>
                        <div>
                        <Header size="tiny" style={{color: "black"}}><strong>{englishTitle}</strong></Header>
                        </div>
                    </Card.Content>
                    <Card.Content>
                        <Image floated="left" className="ui small rounded image" src={image} />
                        <div className="book-info" floated="right">
                            
                            <Card.Meta size='medium'><strong style={{color: "black"}}>{arabic_title}</strong></Card.Meta>
                            <br/>
                            <Card.Meta>Language: <strong style={{color: "green"}}>{language}</strong></Card.Meta>
                            <br/>
                            <Card.Meta>Pages: {num_pages}</Card.Meta>
                        </div>
                    </Card.Content>
                    <Card.Content extra>
                        <div>
                        <a href={file} target="_blank">
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