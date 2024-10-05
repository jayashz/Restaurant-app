import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import CusBtn from '../components/CusBtn';
const Logout = () => {
  const navigation = useNavigation();
  function logoutHandler(){
    navigation.navigate('Welcome')
  }
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer} >
      <CusBtn onPress={logoutHandler}>Logout</CusBtn>
      </View>
    </View>
  )
}

export default Logout;

const styles= StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  innerContainer:{
    position:'absolute',
    bottom:10,
  },
  btn:{

  }
});