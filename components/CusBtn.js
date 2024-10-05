import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

const CusBtn = ({onPress,children}) => {
    function pressHandler(){
        onPress();
    }
  return (
    <Pressable onPress={pressHandler} style={({pressed})=>pressed?styles.press:''}>
        <View style={styles.container}>
            <Text style={styles.text}>
                {children}
            </Text>
        </View>
    </Pressable>
  )
}

export default CusBtn;

const styles= StyleSheet.create({
    
    container:{
        width:200,
        backgroundColor:'red',
        padding:4,
        borderRadius:20,
        marginTop:10,
        overflow:'hidden'
    },
    text:{
        textAlign:'center',
        fontSize:18,
        color:'white'
    },
    press:{
        opacity:0.6,
    }
});