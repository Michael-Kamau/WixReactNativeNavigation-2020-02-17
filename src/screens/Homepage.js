/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
    View,
    Text,
    Button,
    Image
} from 'react-native';

class Homepage extends Component {

    render(){
        return(

            <View>
                <Text>Homepage Screen</Text>

                <Image
                    style={{width: 400, height: 400}}
                    source={{uri:'http://www.apache.org/images/acbd17.png'}}/>

            </View>
        )
    }
    ;
}


export default Homepage;
