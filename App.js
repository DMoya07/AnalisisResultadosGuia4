/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Text,
  View,
} from 'react-native';

import  colors from './src/utils/colors'
import Form from './src/components/Forms'
import Footer from './src/components/Footer'

export default function App(){
  const [capital, setCapital] = useState(null);
  const [interest, setInterest] = useState(null);
  const [months, setMonths] = useState(null);
  return(
    <>
    <StatusBar barStyle="light-content"/>
    <SafeAreaView style={styles.Header}>
      <Text style={styles.HeadApp}>Cotizador de Prestamos</Text>
      <Form
        setCapital={setCapital}
        setInterest={setInterest}
        setMonths={setMonths}   
      />
    </SafeAreaView>
    <View>
      <Text>Result</Text>
    </View>
    <Footer></Footer>
    </>
  );
}

const styles = StyleSheet.create({
  Header:{
    backgroundColor:'#0098D3',
    height:200,
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30,
    alignItems:'center'
  },
  HeadApp:{
    fontSize:25,
    fontWeight:'bold',
    color:'#fff',
    marginTop:15,
  },
})