import React from 'react'
import { View,Text, StyleSheet } from 'react-native'
const Subtitle = ({children}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
      </View>
  )
}

export default Subtitle;

const styles= StyleSheet.create({
    container:{
        marginVertical:10,
        borderTopWidth:2,
        padding:3,
    },
    text:{
        textAlign:'center',
        fontSize:18,
        fontWeight:'semibold',
    }
})