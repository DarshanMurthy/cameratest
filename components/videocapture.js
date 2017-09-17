import React, { Component } from 'react';

import PropTypes from 'prop-types';
import {
  DeviceEventEmitter, // android
  NativeAppEventEmitter, // ios
  NativeModules,
  Platform,
  StyleSheet,
  requireNativeComponent,
  View,
  ViewPropTypes,
  Text
} from 'react-native';

const CameraManager = NativeModules.CameraManager || NativeModules.CameraModule;


export default class VideoCapture extends React.Component{
    // static constants= {
    //     Aspect: CameraManager.Aspect,
    //     BarCodeType: CameraManager.BarCodeType
    // }
    

    render(){
        return(
        <View>
        <Text> Hello Chandan!! </Text>
        <Text> Hllo step </Text>
        </View>
        
        )
    }


}