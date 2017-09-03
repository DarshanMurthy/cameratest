import React from 'react'
import {WebView} from 'react-native'

export default class YouTube extends React.Component{
    render(){
        return(
            <WebView
            style={{flex:1}}
            javaScriptEnabled={true}
            source={{uri: 'https://www.youtube.com/watch?v=oZ9pr7wfMMw'}}
           
            />
        )
    }


}

