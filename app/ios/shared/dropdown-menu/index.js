import React from 'react';
import {View, Text, StyleSheet, Animated, Easing, TouchableOpacity} from 'react-native';
class DropDownMenu extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            slideDown: new Animated.Value(-100),
            fadeIn: new Animated.Value(0)
        }
    }
    componentDidMount(){
       
    }

    componentWillUpdate(nextProps, nextState){
        console.log(nextProps);
        if(nextProps.show){
            this.showMenu();
        }else{
            this.hideMenu();
        }
    }

    showMenu(){
        Animated.timing(this.state.slideDown,{
            toValue:0,
            // easing: Easing.back(),
            duration:100,
        }).start();

        Animated.timing(this.state.fadeIn,{
            toValue:1,
            // easing: Easing.back(),
            duration:100,
        }).start();
    }

    hideMenu(){
        Animated.timing(this.state.slideDown,{
            toValue:-100,
            // easing: Easing.back(),
            duration:100,
        }).start();

        Animated.timing(this.state.fadeIn,{
            toValue:0,
            // easing: Easing.back(),
            duration:100,
        }).start();
    }

    render(){
        return(
           
            <Animated.View style={[styles.container,{...this.props.style,opacity:this.state.fadeIn}]}>
                <Animated.View 
                    style={[styles.menu,{...this.props.style,top:this.state.slideDown}]}       
                >      
                <View style={styles.section1}></View>
            
                <TouchableOpacity 
                    style={styles.section2} onPress={()=>this.props.toggleDropdown()}
                >
                </TouchableOpacity>
                </Animated.View>
            </Animated.View>
           
        );
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'rgba(0,0,0,.3)',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    },
    menu:{
        height:'100%',
        position:'absolute',
        top: 0,
        right: 0,
        left: 0
    },
    section1:{
        backgroundColor:'white',
        flex:1
    },
    section2:{
        flex:3
    }

});
export default DropDownMenu;