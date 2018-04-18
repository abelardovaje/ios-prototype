import React from 'react';
import {StackNavigator, NavigationActions} from 'react-navigation';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {login} from '../action';
import { StyleSheet, Text, View ,TextInput ,KeyboardAvoidingView ,TouchableOpacity, StatusBar, AsyncStorage } from 'react-native';
class LoginForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            username:'',
            password:'',
            user:[]
        }
        this.handleUsernameInputChange = this.handleUsernameInputChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleUsernameInputChange(username){
      this.setState({
          username
      });
    }

    handlePasswordInputChange(password){
        this.setState({
            password
        });
    }

    handleLogin(){
        this.props.login(this.state).then(async (res)=>{
            console.log(res);
            await AsyncStorage.setItem('user',(res) ? JSON.stringify(res):null);
        });   
    }

    render(){
        
        return(
            <KeyboardAvoidingView style={styles.container} behavior="padding">
                
                <View style={styles.formContainer}>
                    <Text style={styles.loginWelcome}>Welcome to BE-LINE</Text>                 
                        <TextInput
                            underlineColorAndroid='transparent'
                            placeholder='username'
                            placeHolderTextColor='white'
                            keyboardType='email-address'
                            autoCapitalize='none'
                            onSubmitEditing={()=>this.passwordInput.focus()}
                            onChangeText={(username)=>this.handleUsernameInputChange(username)}
                            style={styles.input}                
                        />

                        <TextInput
                            underlineColorAndroid='transparent'
                            secureTextEntry
                            placeholder='password'
                            placeHolderTextColor='white'
                            returnKeyType='go'
                            style={styles.input}
                            ref={(input)=>this.passwordInput = input}
                            onChangeText={(password)=>this.handlePasswordInputChange(password)}                
                        />         

                        <TouchableOpacity style={styles.buttonContainer} onPress={this.handleLogin}> 
                            <Text style={styles.buttonText}>Submit</Text>
                        </TouchableOpacity>                     
                </View>
                
            </KeyboardAvoidingView>
           
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:2,   
        alignItems:'flex-start',
        flexDirection:'row',
        justifyContent:'center',
      
    },
    formContainer:{
        marginTop:80,
        alignItems:'center',
    
    },
    loginWelcome:{
        color:'gray',
        fontSize:15,
        marginBottom:50
    },
    input:{     
        height:40,
        width:300,
        backgroundColor:'rgba(255,255,255,0.6)',
        marginBottom:20,
        paddingHorizontal:10,
        borderRadius:5

        // padding:'5px'
    },
    buttonContainer:{
        backgroundColor:'#0AC25A',
        paddingVertical:10,
        marginBottom:10,
        borderRadius:5,
        width:300
    },
    buttonText:{
        textAlign:'center',
        color:'white',
    }


});

function mapStateToProps(state){
    return {
        user:state.User,
        nav:state.Nav
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        login
    },dispatch)
}


export default connect(mapStateToProps,mapDispatchToProps)(LoginForm);