import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const Logout = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer} >

      <Button title='Logout' style={styles.btn}/>
      </View>
    </View>
  )
}

export default Logout;

const styles= StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center'
  },
  innerContainer:{
    width:150,
    position:'absolute',
    bottom:10
  },
  btn:{

  }
});