import { View, Text, Animated, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function AnimatedValueDemo() {
    // const value = useState(new Animated.Value(0))[0];
    const opacity = useState(new Animated.Value(0))[0];
    function fadeIn() {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true
        }).start();
    }
    function fadeOut() {
        Animated.timing(opacity, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true
        }).start();
    }
    // function moveball() {
    //   Animated.timing(value, {
    //     toValue: 500,
    //     duration: 5000,
    //     useNativeDriver: true
    //   }).start()
    // }
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                {/* <View> */}
                <Animated.View style={[{ width: 100, height: 100, borderRadius: 50, opacity: opacity, backgroundColor: 'red', transform: [{ translateX: opacity }] }]} />
                {/* </Animated.View> */}

                {/* <TouchableOpacity onPress={moveball}>
          <Text>Move Me</Text>
        </TouchableOpacity> */}
                <TouchableOpacity onPress={fadeIn}>
                    <Text>Fade In</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={fadeOut}>
                    <Text>Fade Out</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}