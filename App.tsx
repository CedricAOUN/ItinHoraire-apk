import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {DefaultTheme, PaperProvider} from "react-native-paper";
import HeaderComponent from "./components/HeaderComponent";
import SegmentButtons from "./components/SegmentButtons";
import LocationFAB from "./components/LocationFAB";
import { LocationContext } from 'context/LocationContext'

import { useState} from "react";

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#009688',
    secondary: '#ffc107',
  },
};



export default function App() {
    const [location, setLocation] = useState<any>(null);

  return (
      <LocationContext.Provider value={{location, setLocation}}>
          <PaperProvider theme={theme}>
            <HeaderComponent/>
            <SegmentButtons></SegmentButtons>
            <LocationFAB></LocationFAB>
          </PaperProvider>
      </LocationContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
