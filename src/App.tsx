import React, { ReactNode } from 'react';
import {
  StyleSheet,
} from 'react-native';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Colors } from './constants';
import MealsNavigation from './navigation/MealsNavigation';
import { useScreens } from 'react-native-screens';
import { MealsReducer } from './store/reducers';

useScreens();

const rootReducer = combineReducers({
  meals: MealsReducer,
});

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <MealsNavigation />
    </Provider>
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
