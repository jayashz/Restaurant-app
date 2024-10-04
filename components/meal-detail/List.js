import React from 'react'
import { View,Text, StyleSheet } from 'react-native'

const List = ({data}) => {
  return data.map((points)=>(
    <View key={points} style={styles.list}>
        <Text style={styles.text}>{points}</Text>
    </View>
  ))
}

export default List;

const styles= StyleSheet.create({
    list:{
        padding:4,
        backgroundColor:'#D8D2C2',
        margin:3,
        borderRadius:20,
    },
    text:{
        textAlign:'center',
    }
});