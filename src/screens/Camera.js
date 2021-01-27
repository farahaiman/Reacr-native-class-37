import React from 'react';
import{View, Text, } from 'react-native'
import { RNCamera } from 'react-native-camera';

export default function Camera() {
    return (
        
         
              <RNCamera style={{ flex: 1,
                justifyContent: 'flex-end',
                alignItems: 'center'}} type={RNCamera.Constants.Type.back}/>

        
       
    )
}
