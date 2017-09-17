import React from 'react'
import { Text, View} from 'react-native'

export default class StateTesting extends React.Component{
    constructor(props){
        super(props)
        this.state={name:"darsha",place:"Bangalore"}
    }
    render(){
        return(
        <View>
        <Text>{this.state.name}</Text>
        <Text> { this.state.place}</Text>
        </View>);
    }
} 