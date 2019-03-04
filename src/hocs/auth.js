import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';

const auth = (ComponentToWrap) => {
    return class WrappedComponent extends React.Component {
        render () {
            return (
                this.props.currentUser ? <ComponentToWrap />
                : <Redirect to='/login' />
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.authentication.currentUser
    }
}

export default connect(mapStateToProps)(auth)