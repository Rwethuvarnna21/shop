import { Button, View } from 'react-native';
import React from 'react';
import Animated, { useSharedValue, withSpring, withTiming } from 'react-native-reanimated';

export default function Newanime() {
  const width = useSharedValue(100);

  const handlePress = () => {
    width.value = width.value + 50;
  };

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Animated.View
        style={{
          width,
          height: width,
          backgroundColor: 'violet',
        }}
      />
      <Button onPress={()=>{
        // width.value= withTiming/withSpring (width.value+50,{duration:2000})
      }} title="Click me" />
    </View>
  );
}