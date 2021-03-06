import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, AppRegistry, Image} from 'react-native';
import Judul from '../Components/Judul';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
		<Judul teks="BIODATA"/>
		<Judul teks="LOGIN"/>
		<Judul teks="FORM"/>
        <Text style={styles.judul}>Data Diriku</Text>
        <Text style={styles.tulis}>Nama : Ibnu Putra Ardiansyah</Text>
		<Text style={styles.tulis}>No : 15</Text>
		<Text style={styles.tulis}>Kelas : XI RPL 4</Text>
		<Image source={require('../img0.jpg')} style={{width: 340, height: 433}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  judul: {
    fontSize: 36,
    textAlign: 'center',
    margin: 10,
  },
  tulis: {
	fontSize: 24,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
