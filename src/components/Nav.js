import React, { Component } from 'react'
import { Input, Menu, Dropdown, Responsive } from 'semantic-ui-react'
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/index';
import logo from '../spdfslogo.svg'



class Nav extends Component {
    state = { activeItem: 'Home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    handleLogout = () => {
        this.props.logout()

        localStorage.clear()
    }

    handleAddPdf = () => {
        this.props.history.push('/book')
    }

    render() {

        const { activeItem } = this.state
        return (
            <Menu pointing className="nav-header" size='small'>
                
                    <Menu.Menu id='logo' position='left'>
                        <Menu.Item>
                            <Link to='/'>
                                <img src={logo} alt='this is the logo for spdfs'/>
                            </Link>
                        </Menu.Item>
                    </Menu.Menu>

                    <Menu.Menu>
                        <Menu.Item 
                            name='عربى' 
                            active={activeItem === 'عربى'} 
                            onClick={this.handleItemClick} 
                            onMouseDown={this.props.language}
                        />
                        <Menu.Item
                            name='English'
                            active={activeItem === 'English'}
                            onClick={this.handleItemClick}
                            onMouseDown={this.props.language}
                        />
                    <Dropdown classNmae="sections" item text='Categories' style={{ width: "100px"}} >
                            <Dropdown.Menu >
                            <Link to="/aqeedah"><Dropdown.Item>{(this.props.selectedLanguage === "عربى") || (this.props.selectedLanguage === "اردو") ? "عقيدة" : "Aqeedah"}</Dropdown.Item></Link>
                                <Link to="/hadeeth"><Dropdown.Item>{(this.props.selectedLanguage === "عربى") || (this.props.selectedLanguage === "اردو") ? "حديث" : "Hadeeth"}</Dropdown.Item></Link>
                                <Link to="/fiqh"><Dropdown.Item>{(this.props.selectedLanguage === "عربى") || (this.props.selectedLanguage === "اردو") ? "فقه" : "Fiqh"}</Dropdown.Item></Link>
                                <Link to="/tafseer"><Dropdown.Item>{(this.props.selectedLanguage === "عربى") || (this.props.selectedLanguage === "اردو") ? "تفسير" : "Tafseer"}</Dropdown.Item></Link>
                                <Link to="/seerah"><Dropdown.Item>{(this.props.selectedLanguage === "عربى") || (this.props.selectedLanguage === "اردو") ? "سيرة" : "Seerah"}</Dropdown.Item></Link>
                                <Link to="/mutoon"><Dropdown.Item>{(this.props.selectedLanguage === "عربى") || (this.props.selectedLanguage === "اردو") ? "متون" : "Mutoon"}</Dropdown.Item></Link>
                                <Link to="/knowledge"><Dropdown.Item>{(this.props.selectedLanguage === "عربى") || (this.props.selectedLanguage === "اردو") ? "علم" : "Knowledge"}</Dropdown.Item></Link>
                                <Link to="/arabic"><Dropdown.Item>{(this.props.selectedLanguage === "عربى") || (this.props.selectedLanguage === "اردو") ? "عربية" : "Arabic"}</Dropdown.Item></Link>
                                <Link to="/dua"><Dropdown.Item>{(this.props.selectedLanguage === "عربى") || (this.props.selectedLanguage === "اردو") ? "أذكار و الدعاء" : `Adhkaar & Du'a`}</Dropdown.Item></Link>
                                <Link to="/adab"><Dropdown.Item>{(this.props.selectedLanguage === "عربى") || (this.props.selectedLanguage === "اردو") ? "الزهد و الأدب" : `Az-Zuhd & Adab`}</Dropdown.Item></Link>
                                <Link to="/women"><Dropdown.Item>{(this.props.selectedLanguage === "عربى") || (this.props.selectedLanguage === "اردو") ? "نساء" : "Women"}</Dropdown.Item></Link>
                                <Link to="/children"><Dropdown.Item>{(this.props.selectedLanguage === "عربى") || (this.props.selectedLanguage === "اردو") ? "أطفال" : "Children"}</Dropdown.Item></Link>
                                <Link to="/general"><Dropdown.Item>{(this.props.selectedLanguage === "عربى") || (this.props.selectedLanguage === "اردو") ? "عامة والتذكير" : "General & Reminders"}</Dropdown.Item></Link>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Menu.Menu>

                    <Menu.Item onChange={this.props.search} className="search" position='right'>
                            {this.props.selectedLanguage === "عربى" ?
                            <Input icon='search' placeholder='...إبحث' /> :
                            <Input icon='search' placeholder='Search...' /> }
                        </Menu.Item>

                    { this.props.currentUser.id ?
                        <Menu.Item
                            name='Add PDF'
                            active={activeItem === 'Add PDF'}
                            onClick={this.handleItemClick}
                            onMouseDown={this.handleAddPdf}
                        /> : null}
                        

                        { this.props.currentUser.id ?
                        <Menu.Item
                            name='logout'
                            active={activeItem === 'Logout'}
                            onClick={ this.handleItemClick }
                            onMouseDown={this.handleLogout}
                            /> : null }
            </Menu>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.authentication.currentUser
    }
}

export default withRouter(connect(mapStateToProps, { logout })(Nav))