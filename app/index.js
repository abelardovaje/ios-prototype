import React from 'react';
import {Provider}from 'react-redux';
import store from './store';
import IOSRoot from './ios/index';

export const Root = () =>{
    return (
        <Provider store={store}>
            <IOSRoot />
        </Provider>
    )
}