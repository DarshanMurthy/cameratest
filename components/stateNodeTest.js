import React from 'react'
import { Text,View } from 'react-native'



class Blink extends React.Component{
    constructor(props){
        super(props);
        this.state = {showText: true}

        // Toggle the state every second 
        setInterval(() => {
            this.setState(pS => {return { showText: !pS.showText };});
        },1000);

    }
    render() {
        let display = this.state.showText ? this.props.text :'';
        return(
            <Text> { display }</Text>
        );
    }
}


export default class Test extends React.Component{
    render(){
        return(
            <View>
                <Blink text="Hello Welcome to Audio and Video "/>
                <Blink text= " Our code is simple and easy!"/>
            </View>
            
        )
    }
}
