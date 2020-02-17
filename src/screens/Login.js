/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, Text, Button, TextInput,} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {connect} from 'react-redux'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password:''
        }
    }

    goToScreen = (screenName) => {
        Navigation.push(this.props.componentId, {
            component: {
                name: screenName,
            },
        });
    };

    checkUser=(username,password)=>{
        console.log(this.props)
        const user=this.props.users.filter(user=>user.name===username && user.password===password)
        console.log('User Array', user)
        if(user.length>0){
            this.goToScreen('Homepage')
        }else{
            alert('Invalid Username or Password')
        }
    }

    onChangeName=(textValue)=>{
       this.state.username=textValue
    };

    onChangePwd=(textValue)=>{
        this.state.password=textValue
    };

    render(){
        return(

            <View>
                <Text>Login Screen</Text>
                <TextInput placeholder='Username...'  onChangeText={this.onChangeName}/>
                <TextInput placeholder='Password...'  onChangeText={this.onChangePwd}/>
                <Button title='Login' onPress={() => this.checkUser(this.state.username,this.state.password)}/>
            </View>
        )
    }
    ;
}

function mapStateToProps(state){
    return{
        users:state.data.users
    }
}


export default connect(mapStateToProps)(Login);
