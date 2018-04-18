import React from 'react';
import {Provider}from 'react-redux';
import store from './store';
import IOSRoot from './ios/index';
import Android from './android/index';
export const Root = () =>{
    return (
        <Provider store={store}>      
            <Android />
        </Provider>
    )
}