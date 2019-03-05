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
        <div className="ui card link">
                <Card>
                    <Card.Content extra>
                        <div>
                            <Header style={{ color: "black" }}><strong className="title">{englishTitle}</strong></Header>
                        </div>
                    </Card.Content>
                    <Card.Content>
                        <Image floated="left" className="ui small rounded image" src={image} />
                        <div className="book-info" floated="right">
                            
                            <Card.Meta><strong className="arabic" style={{color: "black"}}>{arabic_title}</strong></Card.Meta>
                            {/* <br/> */}
                            <Card.Meta><p className="metaText">Language: {language}</p></Card.Meta>
                            {/* <br/> */}
                            <Card.Meta><p className="metaText">Pages: {num_pages}</p></Card.Meta>
                        </div>
                    </Card.Content>
                    <Card.Content extra>
                        <div>
                        <a href={file} target="_blank">
                                <Button compact size='mini' positive color='green'>
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