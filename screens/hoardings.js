import React, {Fragment} from 'react';

import { View,StyleSheet } from "react-native";

import MapView, { PROVIDER_GOOGLE , Marker } from 'react-native-maps';

import { withNavigation } from 'react-navigation';


class Hoardings extends React.Component {

    static navigationOptions = {
        title: 'Hoardings',
        
      };

    render(){

const latLong = [
    { latitude : 19.075507 , longitude:72.864843 , latitudeDelta: 0.015, longitudeDelta: 0.0121 },
    { latitude : 19.074209 , longitude:72.864843 , latitudeDelta: 0.015, longitudeDelta: 0.0121 },
    { latitude : 19.074209 , longitude:72.862783 , latitudeDelta: 0.015, longitudeDelta: 0.0121 },
    { latitude : 19.075182 , longitude:72.86201 , latitudeDelta: 0.015, longitudeDelta: 0.0121 },
    { latitude : 19.069342 , longitude:72.869135 , latitudeDelta: 0.015, longitudeDelta: 0.0121 },
    { latitude : 19.068368 , longitude:72.871795 , latitudeDelta: 0.015, longitudeDelta: 0.0121 },
    { latitude : 19.076724 , longitude:72.881494 , latitudeDelta: 0.015, longitudeDelta: 0.0121 },
    { latitude : 19.078022 , longitude:72.884412 , latitudeDelta: 0.015, longitudeDelta: 0.0121 }
 
  ]

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

            {
                latLong.map(posh => (
                    <Marker
                    coordinate={posh}
                    title = "Brand Name Here"
                    description = {JSON.stringify(posh)}
                    />
                ))
            }
     </MapView> 
    )
}
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : "center"
    }
})

export default withNavigation(Hoardings);