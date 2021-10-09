import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/app/store';
import { HomeScreen } from './src/screens/HomeScreen';
import Toast from 'react-native-toast-message';

export default function App() {
  return (
    <Provider store={store}>
      <HomeScreen/>
      <Toast config={{}} ref={(ref) => Toast.setRef(ref)} />
    </Provider>
  );
}
