import react from 'react'
import {Text} from 'react-native'

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
            <ListName name="Audio and Videos!"/>,
            <ListName name=" Try new node"/>
        )
    }


}