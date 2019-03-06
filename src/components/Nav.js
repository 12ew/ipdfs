import React, { Component } from 'react'
import { Input, Menu, Dropdown } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
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

    render() {
        // console.log(this.props)
        const { activeItem } = this.state
        return (
            <Menu pointing secondary className="nav-header">
                <Menu.Menu id='logo' position='left'>
                    <Menu.Item>
                        <Link to='/home'>
                            <img src={logo} alt='this is the logo for spdfs'/>
                        </Link>
                    </Menu.Item>
                </Menu.Menu>

                <Menu.Item 
                    name='عربى' 
                    active={activeItem === 'عربى'} 
                    onClick={this.handleItemClick} 
                    onMouseDown={this.props.language}
                />
                <Menu.Item 
                    name='Arabic' 
                    active={activeItem === 'Arabic'} 
                    onClick={this.handleItemClick} 
                    onMouseDown={this.props.language}
                />
                <Menu.Item
                    name='English'
                    active={activeItem === 'English'}
                    onClick={this.handleItemClick}
                    onMouseDown={this.props.language}
                />
                <Menu.Item
                    name='اردو'
                    active={activeItem === 'اردو'}
                    onClick={this.handleItemClick}
                    onMouseDown={this.props.language}
                />
                <Menu.Item
                    name='Français'
                    active={activeItem === 'Français'}
                    onClick={this.handleItemClick}
                    onMouseDown={this.props.language}
                />
                <Menu.Item
                    name='Español'
                    active={activeItem === 'Español'}
                    onClick={this.handleItemClick}
                    onMouseDown={this.props.language}
                />
                <Dropdown item text='Categories'>
                    <Dropdown.Menu >
                        <Link to="/aqeedah"><Dropdown.Item>Aqeedah</Dropdown.Item></Link>
                        <Link to="/hadeeth"><Dropdown.Item>Hadeeth</Dropdown.Item></Link>
                        <Link to="/fiqh"><Dropdown.Item>Fiqh</Dropdown.Item></Link>
                        <Link to="/tafseer"><Dropdown.Item>Tafseer</Dropdown.Item></Link>
                        <Link to="/seerah"><Dropdown.Item>Seerah</Dropdown.Item></Link>
                        <Link to="/mutoon"><Dropdown.Item>Mutoon</Dropdown.Item></Link>
                        <Link to="/arabic"><Dropdown.Item>Arabic</Dropdown.Item></Link>
                    </Dropdown.Menu>
                </Dropdown>
                <Menu.Menu position='right'>
                    <Menu.Item onChange={this.props.search}>
                        <Input icon='search' placeholder='Search...' />
                    </Menu.Item>

                { this.props.currentUser.id ?
                <Link to='/book'>
                    <Menu.Item
                        name='Add PDF'
                        active={activeItem === 'Add PDF'}
                        onClick={this.handleItemClick}
                    />
                </Link> : null}
                    

                    { this.props.currentUser.id ?
                <Menu.Item
                    name='logout'
                    active={activeItem === 'Logout'}
                    onClick={this.handleItemClick, this.handleLogout}
                    /> : null }
                </Menu.Menu>
            </Menu>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.authentication.currentUser
    }
}

export default connect(mapStateToProps, { logout })(Nav)