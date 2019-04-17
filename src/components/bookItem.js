import React from 'react';
import { Button, Icon} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import EditBook from './EditBook'

class BookItem extends React.Component {
        
    render(){
        const { id, eng_title, arabic_title, language, num_pages, file, image, author, genre, translator, about, harakat } = this.props.book
        const englishTitle = eng_title.toLowerCase()
                            .split(' ').map((s) => s.charAt(0)
                            .toUpperCase() + s.substring(1))
                            .join(' ');
        return(
            <div className="ui link row bookItem">
                <div className="column-left"><img align='left' className="ui small rounded image zoom" src={image} alt="book cover" /></div>
                <div className="column">
                    <p className="title">{englishTitle}</p>
                    <p className="title">{arabic_title}</p>
                    <span><p className="meta">Language:</p> <p>{language}</p></span><br/>
                    <span><p className="meta">Pages:</p> <p>{num_pages}</p></span>
                    { !this.props.currentUser.id ?
                    <a href={file} target="_blank" rel="noopener noreferrer">
                        <Button className="button" compact size='mini' basic positive>
                            <Icon name="download" />Download
                            </Button>
                    </a> :
                        <Link to={{
                            pathname: `/editbook/${id}`,
                            state: {
                                id,
                                englishTitle,
                                image,
                                file,
                                arabic_title,
                                language,
                                num_pages,
                                author,
                                genre,
                                translator,
                                about,
                                harakat
                            }
                        }}><Button className="button" compact size='mini' basic positive onClick={this.handleEdit}>
                        Edit
                    </Button></Link>}
                </div>
                <br />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.authentication.currentUser
    }
}

export default connect(mapStateToProps)(BookItem)