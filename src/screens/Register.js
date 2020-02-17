/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {addUser} from '../actions/dataActions';


import {
    View,
    Text,
    Button,
    TextInput,
} from 'react-native';

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    }


    onChangeName = (textValue) => {
        this.state.username = textValue;
    };

    onChangePwd = (textValue) => {
        this.state.password = textValue;
    };

    register = () => {
        const data = {
            username: this.state.username,
            password: this.state.password,
        };
        this.props.addUser(data);
        alert('Registration successful. You can now log in');
    };


    render() {
        console.log('ptopd', this.props);
        return (

            <View>
                <Text>Register Screen</Text>

                <TextInput placeholder='Username...' onChangeText={this.onChangeName}/>
                <TextInput placeholder='Password...' onChangeText={this.onChangePwd}/>
                <Button title='Register' onPress={() => this.register()}/>
            </View>
        );
    }
}


Register.propTypes = {
    addUser: PropTypes.func.isRequired,
};

export default connect(null, {addUser})(Register);
