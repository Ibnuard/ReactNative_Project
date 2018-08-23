/**
 * Resika
 * https://github.com/facebook/react-native
 * @flow
 */
 
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Button,
  Text, TextInput,
  View
} from 'react-native';
 
export default class HitungLuasSegitiga extends Component {
  constructor(props){
    super(props)
    this.state = {
      alas:"Ibnu Putra Ardiansyah",
      tinggi:"15",
      luas:"XI RPL 4"
    };
  }
 
  render() {
    return (  
      <View style = {{flex:1,backgroundColor:'#bbdefb'}}>
 
        <View style={{backgroundColor:'#2196f3'}}>
           <Text style = {{padding: 10, fontSize: 20, color: 'white', textAlign:'center'}} >
            Data Diriku
          </Text>
         </View>
 
        <View style={{margin:20, backgroundColor:'#90caf9'}}>
          <Text style = {{padding: 10, fontSize: 20}} >
              Nama 	   	:  {this.state.alas} {"\n"}
              Nomor			 :  {this.state.tinggi} {"\n"}
              Kelas 			  : {this.state.luas}
          </Text>
         </View>
   </View> 
    );
  }
}
AppRegistry.registerComponent('AppForm2', () => HitungLuasSegitiga);