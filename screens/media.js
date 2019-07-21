import React, {Fragment} from 'react';

import { View,StyleSheet, Picker , Button , TouchableOpacity , Text} from "react-native";

import { withNavigation } from 'react-navigation';




class MediaScreen extends React.Component {

    static navigationOptions = {
        title: 'Media',
        headerTitle : "Media"
      };

    render(){
    return (
        <View style={styles.container}>

            <Text style={{marginLeft:10 , marginTop:10}}>Select City : </Text>
<Picker
  selectedValue="mumbai"
>
  <Picker.Item label="Mumbai" value="mumbai" />
  <Picker.Item label="Banglore" value="Banglore" />
</Picker>

<Text style={{marginLeft:10 , marginTop:10, marginBottom :10 }}>Choose the Media type : </Text>

<View style={{flexDirection:"row",justifyContent:"space-evenly"}}>
<TouchableOpacity style={styles.button}
onPress={() => this.props.navigation.navigate('Hoardings')}
>
<Text style={{color : '#fff'}}>Wishing Media</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.button}
onPress={() => this.props.navigation.navigate('Hoardings3')}
>
<Text style={{color : '#fff'}}>Billboard</Text>
</TouchableOpacity>
</View>

<View style={{flexDirection:"row",justifyContent:"space-evenly", marginTop:20}}>
<TouchableOpacity style={styles.button}
onPress={() => this.props.navigation.navigate('Hoardings2')}
>
<Text style={{color : '#fff'}}>BQS</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.button}
onPress={() => this.props.navigation.navigate('Hoardings')}
>
<Text style={{color : '#fff'}}>Mall</Text>
</TouchableOpacity>
</View>

        </View>
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


export default withNavigation(MediaScreen);