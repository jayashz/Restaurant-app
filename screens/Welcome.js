import React from 'react'
import { Button, ImageBackground, StyleSheet, Text, View } from 'react-native'
import CusBtn from '../components/CusBtn';

const Welcome = ({navigation}) => {
    function pressHandler(){
        navigation.navigate('Main');
    }
  return (
    <View style={style.root}>
        <ImageBackground source={require('../assets/welcome.jpg')} style={style.img}/>
        <View style={style.innerContainer}>
            <Text style={style.text}>Welcome</Text>
            <CusBtn onPress={pressHandler}>View categories</CusBtn>
        </View>
    </View>
  )
}

export default Welcome;
const style=StyleSheet.create({
    root:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    innerContainer:{
        position:'absolute',
    },
    img:{
        width:'100%',
        height:'100%',
        objectFit:'contain',
    },
    text:{
        fontSize:40,
        color:'white',
        fontWeight:'bold',
        textAlign:'center'
    }
})