import * as React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
// import {createSwitchNavigator, createAppContainer} from 'react-navigation';

import AppHeader from './components/AppHeader';
import InfoScreen from './screens/InformationsScreen';

export default class App extends React.Component{
  render(){
    return(
      <View>
        <AppHeader/>
        <InfoScreen/>
      </View>
    )
  }
}

// var AppNavigator = createSwitchNavigator({
//   InfoScreen: InfoScreen
// })

// const AppContainer = createAppContainer(AppNavigator);
