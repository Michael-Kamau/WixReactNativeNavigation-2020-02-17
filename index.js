/**
 * @format
 */

import {AppRegistry} from 'react-native';
import { Navigation } from "react-native-navigation";
import App from './App';
import {name as appName} from './app.json';
import Login from './src/screens/Login'
import Register from './src/screens/Register'
import Homepage from './src/screens/Homepage'
import Main from './src/Main'
import {Provider} from 'react-redux'
import {createStore} from 'redux';
import store from './src/store'



Navigation.registerComponentWithRedux(`WelcomeScreen`, () => App,Provider,store);
Navigation.registerComponentWithRedux(`Login`, () => Login,Provider,store);
Navigation.registerComponentWithRedux(`Register`, ()  => Register,Provider,store);
Navigation.registerComponentWithRedux(`Main`, ()  => Main,Provider,store);

Navigation.registerComponentWithRedux(`Homepage`, () => Homepage,Provider,store);

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            stack: {
                id:'AppStack',
                children: [{
                    component: {
                        name: "Main"
                    }
                }]
            }
        }
    });
    });
