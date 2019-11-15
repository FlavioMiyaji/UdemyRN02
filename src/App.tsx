/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { ReactNode } from 'react';
import {
  // View,
  // StatusBar,
  YellowBox,
  StyleSheet,
} from 'react-native';
import { Colors } from './constants';
import MealsNavigation from './navigation/MealsNavigation';
import { useScreens } from 'react-native-screens';

useScreens();

const App = () => {
  YellowBox.ignoreWarnings([
    'Warning: componentWillMount is deprecated',
    'Warning: componentWillReceiveProps is deprecated',
  ]);

  return (
    // <View>
    //   <StatusBar
    //     barStyle="dark-content"
    //     translucent
    //     backgroundColor="rgba(0,0,0,0.10)"
    //   />
    //   {/* <SafeAreaView>
    //     <ScrollView
    //       contentInsetAdjustmentBehavior="automatic"
    //       style={styles.scrollView}>
    //       <View style={styles.body}>
    //         <Text>Step One</Text>
    //       </View>
    //     </ScrollView>
    //   </SafeAreaView> */}
    // </View>
    <MealsNavigation />
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.background,
  },
  body: {
    backgroundColor: Colors.background,
    paddingVertical: 30,
    paddingHorizontal: 15,
  },
});

export default App;
