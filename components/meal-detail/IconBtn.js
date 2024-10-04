import React from 'react'
import { Pressable, StyleSheet } from 'react-native'
import Entypo from '@expo/vector-icons/Entypo';
const IconBtn = ({onPress,color}) => {
  return (
    <Pressable onPress={onPress} style={({pressed})=>pressed && style.pressed}>
        <Entypo name="heart" size={29} color={color}  />
    </Pressable>
  )
}

export default IconBtn;

const style=StyleSheet.create({
    pressed:{
        opacity:0.4,
    }
})