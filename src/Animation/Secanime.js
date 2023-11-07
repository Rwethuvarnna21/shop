import {Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Animated, {useSharedValue, withSpring,useAnimatedStyle, withDelay} from 'react-native-reanimated'


const Secanime = () => {
    const h=useSharedValue(100)
    const w=useSharedValue(100)
    const r=useSharedValue(0)
    const Secanimestyle=useAnimatedStyle(()=>{
        return{
        height:h.value,
        width:w.value,
        borderRadius:r.value,
        opacity:w.value==100?1:.5,
        transform: [{ translateY: h.value+-200}, { translateX: w.value}],
        
    }
})
    
  return (
    <View style={{flex:1,backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
        <Animated.View style={[
          {width: 100,
          height: 100,
          backgroundColor: 'blue'},
          Secanimestyle,
         ]}></Animated.View>
        <Button onPress={()=>{
        if(w.value==100){
            h.value=withDelay(2000,withSpring(200));
            w.value=withDelay(2000,withSpring(200)); 
            r.value=withDelay(2000,withSpring(100));
        }else{
            h.value=withDelay(2000,withSpring(100));
            w.value=withDelay(2000,withSpring(100));
            r.value=withDelay(2000,withSpring(0))
        }
      }} title="Click me" />
      {/* <Text>Secanime</Text> */}
    </View>
  )
}

export default Secanime

const styles = StyleSheet.create({})
