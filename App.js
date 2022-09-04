import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import BottomBar from './components/BottomBar';

const App = () => {
  return (
    <View style={styles.container}>
      <BottomBar />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
