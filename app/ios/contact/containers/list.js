import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {View, Text, FlatList, ScrollView, StyleSheet} from 'react-native';
import {SearchBar, ListItem} from 'react-native-elements';
import {seachContact} from '../actions';
class List extends React.Component{
    static timer = 0;
    constructor(){
        super();
        this.state = {
            users:[]
        }
        this.searchContact = this.searchContact.bind(this);
    }

    searchContact(key){
        clearTimeout(this.timer);   
        this.timer = setTimeout(()=>{        
            this.props.seachContact(key);   
        },2000);
    }

    renderSearchBar(){
        return (
        <SearchBar 
        onChangeText={(searchKey)=>this.searchContact(searchKey)}
        placeholder="Type here.." 
        inputStyle= {{backgroundColor:'white'}}
        containerStyle={{
            backgroundColor:'#0AC25A',
            borderTopWidth:0,
            borderBottomWidth:0
        }}
        />
    );
    }

    render(){
        const {navigate} = this.props.navigation;
        return(
            <View>
            {this.renderSearchBar()}        
                <ScrollView style={styles.container}>         
                <FlatList
                        data={this.state.users}
                        keyExtractor={(item,index) =>item.email}
                        renderItem={({item})=>
                            <ListItem
                            underlayColor='white'
                            roundAvatar
                            containerStyle={{borderBottomWidth:0,backgroundColor:'white'}}
                            onPress={()=>navigate('Chat',item)}
                            avatar={item.picture.large}
                            subtitle={item.email}
                            title={`${item.name.first + " " + item.name.last}`}
                            />
                        }
                />
                </ScrollView>
            </View>
        )
    }
}

let styles= StyleSheet.create({
    container:{
        // backgroundColor:'#0AC25A'
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

function mapStateToProps(){
    return {
        
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        seachContact
    },dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(List);