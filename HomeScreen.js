// HomeScreen.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Second')}>
        <Text>Go to Second Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
