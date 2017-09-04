import React from 'react'
import {Text, View} from 'react-native'
class Greetings extends React.Component {
    render(){
        return (
            <Text> Hello {this.props.name}! </Text>
           
        );
    }
}

 export default class Audio extends React.Component{

    render(){
        return(
            <View> 
                <Greetings name='Tame'/>
                <Greetings name='newTame'/>
            </View>
        )
    }

}