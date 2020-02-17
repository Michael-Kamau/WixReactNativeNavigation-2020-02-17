/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import Main from './src/Main';


// const initialState = {
//     counter: 3,
// };
// const reducer = (state = initialState,action) => {
//     switch (action.type) {
//         case 'INCREASE_COUNTER':
//             return {counter:state.counter+1}
//         case 'DECREASE_COUNTER':
//             return {counter:state.counter-1}
//
//
//     }
//
//     return state;
// };
//
// const store = createStore(reducer);


class App extends Component {

    render() {
        return (
            // <Provider store={store}>
                <Main/>
            // </Provider>
        );
    }
}


export default App;
