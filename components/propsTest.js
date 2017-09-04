import React from 'react'
import {Text, View} from 'react-native'

class ListName extends React.Component{
    render(){
        return(
            <Text>{this.props.name }</Text>
        )
    }

}

export default class Props extends React.Component{
    render(){
        return(
            <View>
            <ListName name="Audio and Videos!"/>
            <ListName name=" Try new node"/>
            <ListName name="camera Test"/>
            </View>
        )
    }


}