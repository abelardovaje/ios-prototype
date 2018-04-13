import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {View, Text, FlatList, ScrollView, StyleSheet, DeviceEventEmitter} from 'react-native';
import {SearchBar, ListItem} from 'react-native-elements';
import {seachContact,getContacts, startSocket} from '../actions';
import Socket from '../../../middlewares/socket';
import axios from 'axios';
class List extends React.Component{
    static timer = 0;
    constructor(){
        super();
        this.state = {
            users:[],
            searchResult:[],
            isSearching:false
        }
        this.searchContact = this.searchContact.bind(this);
    }

    componentWillMount(){
        console.log('user:',this.props.user);
        let user = this.props.user.user;
        this.props.getContacts(user);
        this.props.startSocket(user);
        DeviceEventEmitter.addListener('refresh',()=>{
            this.refresh();
        });

        //load all socket listeners
    }

    searchContact(key){
        
        this.setState({
            searchResult:[]
        });

        if(key){
            clearTimeout(this.timer);   
            this.setState({
                isSearching:true
            });

            this.timer = setTimeout(()=>{        
                this.props.seachContact(key).then((res)=>{
                    console.log('result:',res);
                    this.setState({
                        searchResult:res
                    });
                });   
            },2000);

        }else{

            this.setState({
                isSearching:false
            });  

        }
        
    }

    renderSearchBar(){
        return (
            <SearchBar 
                onChangeText={(searchKey)=>this.searchContact(searchKey)}
                placeholder="Type here.." 
                ref={search => this.search = search}
                inputStyle= {{backgroundColor:'white'}}
                containerStyle={{
                    backgroundColor:'#0AC25A',
                    borderTopWidth:0,
                    borderBottomWidth:0
                }}
            />
        );
    }

    renderSearchResult(navigate){
        return (
            <ScrollView>
                <FlatList
                data={this.state.searchResult}
                keyExtractor={(item,index) =>item.email}
                renderItem={({item})=>
                    <ListItem
                    underlayColor='whitesmoke'
                    roundAvatar
                    containerStyle={{borderBottomWidth:0,backgroundColor:'white'}}
                    onPress={()=>navigate('ContactDetails',item)}
                     avatar={item.image}
                    subtitle={item.email}
                    title={`${item.name}`}
                    />
                }/> 
            </ScrollView> 
        )
    }

    renderContacts(navigate){
        return (
            <ScrollView>
                 <FlatList
                    data={this.props.contacts}
                    keyExtractor={(item,index)=>item._id}
                    renderItem={({item})=>
                        <ListItem 
                        underlayColor='whitesmoke'
                        roundAvatar
                        containerStyle={{borderBottomWidth:0,backgroundColor:'white'}}
                        onPress={()=>navigate('Chat',item)}
                        avatar={item.image}
                        subtitle={item.email}
                        title={`${item.name}`}
                        style={styles.listItem}/>
                    }
                />                                              
            </ScrollView>
        )
    }

    refresh(){
        if(this.search){
            this.search.clearText();
        }   
    }

    render(){
        const {navigate} = this.props.navigation;
        return(
            <View style={styles.container}>
                {this.renderSearchBar()}   
                
                {!this.state.isSearching ?              
                    this.renderContacts(navigate) : this.renderSearchResult(navigate)                 
                }                   
            </View>
        )
    }
}

let styles= StyleSheet.create({
    container:{
        backgroundColor:'white',
        flex:1,
    },
    list:{
        // backgroundColor:'#202225',
    },
    listItem:{
        color:'red'
    },
    red:{
        color:'green'
    }   
})

function mapStateToProps(state){
    return {
        contacts:state.Contacts,
        user:state.User
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        seachContact,
        getContacts,
        startSocket
    },dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(List);