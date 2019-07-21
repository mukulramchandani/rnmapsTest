import React, {Fragment} from 'react';

import { createAppContainer, createStackNavigator ,createBottomTabNavigator } from "react-navigation";

import LoginScreen from './screens/login';
import HomeScreen from './screens/home';
import MediaScreen from './screens/media';
import Hoardings from './screens/hoardings';
import Hoardings2 from './screens/hoardings2';
import Hoardings3 from './screens/hoardings3';



const TabNavigator = createBottomTabNavigator({
     Brands : HomeScreen,
     Media : MediaScreen,
  });


const Navigation = createStackNavigator({
    Login : {
        screen : LoginScreen
    },
    Home : {
        screen : TabNavigator
    },
    Hoardings : {
        screen : Hoardings
    },
    Hoardings2 : {
        screen : Hoardings2
    },
    Hoardings3 : {
        screen : Hoardings3
    },
},
{
    initialRouteName: "Login"

}
)

export default createAppContainer(Navigation);
