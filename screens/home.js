import React, {Fragment} from 'react';

import { View,StyleSheet, Picker , Button , TouchableOpacity , Text} from "react-native";

import MapView, { PROVIDER_GOOGLE , Marker } from 'react-native-maps';

import Geolocation from '@react-native-community/geolocation';





class HomeScreen extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            latitude : null,
            longitude : null,
            error : null,
        };
    }

     geo =  () =>  {
        Geolocation.getCurrentPosition(
            (position) => {
         console.log("wokeeey");
         console.log(position.coords.latitude);

         this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            error: null,
          });
          console.log("lat" + this.state.latitude);
        },
        (error) => this.setState({ error : error.message  }),
        {enableHighAccuracy: true, timeout: 50000},
        );

        console.log(this.state.latitude);
        
    }

    static navigationOptions = {
        title: 'Brands',
      };

    render(){
    return (
      

            

<MapView
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={styles.container}
       region={{
         latitude: 19.0760,
         longitude: 72.8777,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
    >
       
       { this.state.latitude ?  
         <Marker
         coordinate={{"latitude":this.state.latitude,"longitude":this.state.longitude,atitudeDelta: 0.015,
         longitudeDelta: 0.0121,}}
         title={"Current Location"}
         image={require('../assets/iconfinder_location_1055034.png')}

       /> : this.geo()
       }
    </MapView>

    
    )
}
}
const styles = StyleSheet.create({
    container : {
        flex : 1,
        //justifyContent : "center"
    },

    button: {
        backgroundColor: '#841584',
        elevation: 2, // Android
        height: 50,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:"center",
        marginTop:10,
        borderRadius : 15
    },
})


export default HomeScreen;