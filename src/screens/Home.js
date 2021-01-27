import React from 'react';
import{View, Text,Button} from 'react-native'

export default function Home(props) {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
          <Text style={{fontSize: 24}}>
             Home screen with 
         </Text>
         <Button onPress={()=>props.navigation.navigate("Camera")} title="Open camera"/>
        </View>
    )
}
