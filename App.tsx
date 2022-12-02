import React, { useState } from 'react';
import {
  View, Text, Animated, TouchableOpacity, PanResponder
} from 'react-native';
import AnimatedValueDemo from "./src/component/AnimatedValueDemo";
import PanResponderDemo from './src/component/PanResponderDemo';

const App = () => {
  return (
    // <AnimatedValueDemo />
    <PanResponderDemo />
  )
};

export default App;
