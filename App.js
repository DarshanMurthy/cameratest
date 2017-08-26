import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View, ListView,Image } from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      isLoading:true
    }
  }
  componentDidMount(){
    return fetch('https://facebook.github.io/react-native/movies.json')
          .then ((response)=> response.json())
          .then((responseJson) => {
            let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2 });
            this.setState({
              isLoading:false,
              dataSource : ds.cloneWithRows(responseJson.movies)          
            });
          })
          .catch((error) => {
            console.error(error)
          });
  };

  render() {
    let pic = {uri: 'http://www.jasonchristopher.com/wp-content/uploads/2015/07/sexy-girl-bikini.jpg'
  };
    if(this.state.isLoading){
    return (
      <View style={{flex:1, paddingTop: 20}}>
       <ActivityIndicator/>
      </View>
    );
  }
   return(
     <View style={{flex:1, paddingTop:20}}>
          <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
      
       <Text> Hello Auto Connector! </Text>  
       <Text> Chandan </Text>
       <Text> Hello Chandan </Text>

       <Image source={pic} style={{width: 500, height: 500}}/>
       <ListView
       dataSource={this.state.dataSource}
        renderRow={(rowData) => <Text>{rowData.title}, {rowData.releaseYear}</Text>}
       />
     </View>
   );

  }
}

