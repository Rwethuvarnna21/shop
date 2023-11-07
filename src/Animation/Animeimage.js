import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Animated, { Easing, withSpring, withTiming } from 'react-native-reanimated';
import Reactlogo from '../assets/images/Reactlogo'; // Make sure the path is correct

// const { Value, block, cond, eq, set, startClock, stopClock, clockRunning, timing, spring, debug, and } = Animated;

const Animeimage = () => {
  const opacity = new Value(0);
  const clock = new Animated.Clock();
  const fadeIn = () => {
    const config = {
      duration: 1000, // Adjust the duration as needed
      toValue: 1,
      easing: Easing.inOut(Easing.ease),
    };
    return block([
      cond(clockRunning(clock), 0, startClock(clock)),
      timing(clock, opacity, config),
      cond(eq(opacity, 1), stopClock(clock)),
    ]);
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
      <Animated.View
        style={{
          width: 200,
          height: 200,
          backgroundColor: 'violet',
          opacity,
        }}
      />
      <TouchableOpacity onPress={fadeIn}>
        <Text>Click to Fade In Image</Text>
      </TouchableOpacity>
      
      {/* Animated Image */}
      <Animated.Image
        source={{uri:'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg'}}
        style={[styles.image, { opacity }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 200, // Adjust the width and height as needed
    height: 200,
  },
});

export default Animeimage;
