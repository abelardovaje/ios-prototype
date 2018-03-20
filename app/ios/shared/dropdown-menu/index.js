import React from 'react';
import {View, Text, StyleSheet, Animated, Easing,TouchableHighlight, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import FontAwesome, { Icons } from 'react-native-fontawesome';
class DropDownMenu extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            slideDown: new Animated.Value(-200),
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
            duration:150,
        }).start();

        Animated.timing(this.state.fadeIn,{
            toValue:1,
            // easing: Easing.back(),
            duration:200,
        }).start();
    }

    hideMenu(){
        Animated.timing(this.state.slideDown,{
            toValue:-200,
            // easing: Easing.back(),
            duration:150,
        }).start();

        Animated.timing(this.state.fadeIn,{
            toValue:0,
            // easing: Easing.back(),
            duration:200,
        }).start();
    }

    render(){
        return(
           
            <Animated.View style={[styles.container,{...this.props.style,opacity:this.state.fadeIn}]}>
                <Animated.View 
                    style={[styles.menu,{...this.props.style,top:this.state.slideDown}]}       
                >      
                <View style={styles.section1}>
                    <TouchableHighlight style={styles.item} underlayColor='whitesmoke' onPress={()=>alert()}>                
                        <View style={{alignItems:'center'}}>
                            <FontAwesome style={{fontSize:20}}>{Icons.ban}</FontAwesome>
                            <Text>Remove</Text>
                        </View>
                    </TouchableHighlight>
                    
                </View>
               

                
            
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
        flex:1,
        borderWidth:1,
        borderColor:'whitesmoke',
        flexDirection:'row',
        justifyContent:'flex-end',
        padding:5
    },
    section2:{
        flex:6
    },
    item:{
        width:80,
        height:80,
        padding:10,
        margin:3,
        alignItems:'center',
        paddingTop:15
    }

});
export default DropDownMenu;