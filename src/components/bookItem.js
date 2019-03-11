import React from 'react'
import { Card, Button, Header, Icon, Image } from 'semantic-ui-react'

class BookItem extends React.Component {
        
    render(){
        // console.log(this.props.book)
        const { eng_title, arabic_title, about, language, translator, num_pages, file, image, author } = this.props.book
        const englishTitle = eng_title.toLowerCase()
                            .split(' ').map((s) => s.charAt(0)
                            .toUpperCase() + s.substring(1))
                            .join(' ');
        return(
            <div className="ui link row">
                <div className="column-left"><img align='left' className="ui small rounded image zoom" src={image} /></div>
                <div className="column">
                    <p className="title">{englishTitle}</p>
                    <p className="title">{arabic_title}</p>
                    {/* <span><p className="meta">Author:</p> <p>{author.name}</p></span> */}
                    <span><p className="meta">Language:</p> <p>{language}</p></span><br/>
                    <span><p className="meta">Pages:</p> <p>{num_pages}</p></span>
                    <a href={file} target="_blank">
                        <Button className="button" compact size='mini' basic positive>
                            <Icon name="download" />Download
                            </Button>
                    </a>
                </div>
                <br />
            </div>
        )
    }
}
export default BookItem