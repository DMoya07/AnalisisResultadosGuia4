/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useState, useEffect } from 'react';
 import {
   SafeAreaView,
   StyleSheet,
   StatusBar,
   Text,
   View,
 } from 'react-native';
 
 import  colors from './src/utils/colors';
 import Form from './src/components/Forms';
 import Footer from './src/components/Footer';
 import Result from './src/components/Results'
 
 export default function App(){
   const [nombre, setNombre] = useState(null);
   const [salario, setSalario] = useState(null);
   const [total, setTotal] =useState(null);
   const [errorMessage, setErrorMessage] = useState("");

   useEffect(() => {
    if (nombre && salario) calculate();
    else reset();
    }, [nombre, salario]);
    const calculate = () => {
        reset();
        if (!nombre) {
            setErrorMessage('Ingrese su nombre');
        } else if (!salario) {
            setErrorMessage('Ingrese su salario');
        } else {
            const i  = 0.12
            const salaridescuentos = salario * i;
            const fee = salario - salaridescuentos;
            setTotal({
            totalPayable: (fee).toFixed(2).replace('.', ','),
            });
        }
    };

    const reset = () => {
        setErrorMessage('');
        setTotal(null);
    };
       

   return(
     <>
     <StatusBar barStyle="light-content"/>
     <SafeAreaView style={styles.Header}>
       <Text style={styles.HeadApp}>Calculadora de Salario</Text>
       <Form
         setNombre={setNombre}
         setSalario={setSalario}   
       />
     </SafeAreaView>
     <Result
        nombre={nombre}
        salario={salario}
        total={total}
        errorMessage={errorMessage}
     />
     <Footer calculate={calculate} />
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