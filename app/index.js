import React from 'react';
import {Provider}from 'react-redux';
// import store from './store';
// import IOSRoot from './ios/index';
import { combineReducers ,createStore, applyMiddleware} from 'redux';
import {connect} from 'react-redux';
import {
    StackNavigator,
    addNavigationHelpers,
    NavigationActions
  } from 'react-navigation';
  import {
    createReduxBoundAddListener,
    createReactNavigationReduxMiddleware,
  } from 'react-navigation-redux-helpers';
import {Text,Button} from 'react-native';

class Login extends React.Component{
    test(){
        const { dispatch, nav } = this.props;
        dispatch(NavigationActions.back());
    }
    render(){
        return <Button title="test" onPress={this.test.bind(this)}/>
    }
}

class Home extends React.Component{
    render(){
        return <Text>Home</Text>
    }
}
const AppNavigator = StackNavigator({
      Login:{
          screen:Login
      },
      Home:{
          screen:Home
      }
});


const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Login'));

const navReducer = (state = initialState, action) => {
    const nextState = AppNavigator.router.getStateForAction(action, state);
  
    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state;
};

const appReducer = combineReducers({
    nav: navReducer
});

const middleware = createReactNavigationReduxMiddleware(
    "root",
    state => state.nav,
  );
  
const addListener = createReduxBoundAddListener("root");


class App extends React.Component {
    render() {
      return (
        <AppNavigator navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.nav,
          addListener,
        })} />
      );
    }
}

const mapStateToProps = (state) => ({
    nav: state.nav
});

const store = createStore(
    appReducer,
    applyMiddleware(middleware),
  );
  

const AppWithNavigationState = connect(mapStateToProps)(App); 

export const Root = () =>{
    return (
        <Provider store={store}>
            <AppWithNavigationState />
        </Provider>
    )
}