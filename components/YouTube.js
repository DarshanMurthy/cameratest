import React from 'react'
import WebView from 'react-native'

export default class YouTube extends React.Component{
    render(){
        return(
            <WebView
            source={{uri: 'https://github.com/facebook/react-native'}}
            style={{marginTop: 20}}
            />
        )
    }


}

