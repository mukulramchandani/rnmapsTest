import React, {Fragment} from 'react';

import { View,StyleSheet, Button } from "react-native";

import { withNavigation } from 'react-navigation';



class LoginScreen extends React.Component {

    static navigationOptions = {
        title: 'Prototype Only',
        
      };
    render(){
    return (
        <View style={styles.container}>

<Button
  onPress={() => this.props.navigation.navigate('Home')}
  title="Login to see Hoardings"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
        </View>
    )
}
}
const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : "center"
    }
})

export default withNavigation(LoginScreen);