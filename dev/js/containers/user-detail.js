import React, {Component} from 'react';
import {connect} from 'react-redux';

/*
 * We need "if(!this.props.user)" because we set state to null by default
 * */

class UserDetail extends Component {
    render() {
        if (!this.props.user) {
            return (<div>Select a user...</div>);
        }
        return (
            <div>
                <h1>{this.props.user.name}</h1>
                <a href= "this.props.usesr.url">
                    <image src={this.props.user.thumbnail} ></image>
                </a>
                <h3 href = "this.props.user.url">CLICK HERE TO DOWNLOAD.</h3>
                <h3>Description: {this.props.user.description}</h3>
            </div>
        );
    }
}

// "state.activeUser" is set in reducers/index.js
function mapStateToProps(state) {
    return {
        user: state.activeUser
    };
}

export default connect(mapStateToProps)(UserDetail);
