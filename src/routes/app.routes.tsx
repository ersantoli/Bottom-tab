import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from "react"
import { Dashboard } from '../pages/dashboard';
import { Home } from '../pages/home';
import { Profile } from '../pages/profile';
import { Search } from '../pages/search';
import {NavigationContainer} from '@react-navigation/native'
const {Navigator,Screen} = createBottomTabNavigator();
import {Feather} from '@expo/vector-icons'

export function AppRoutes() {
  return (
    <NavigationContainer>
      <Navigator>
      <Screen name="Home" 
      component={Home}
        options={{
        tabBarIcon: ()=>{
          return<Feather name='book-open' size={25} color="#000"/>
        }
      }}/>
      <Screen name="Profile" component={Profile} />
      <Screen name="Dashboard" component={Dashboard} />
     <Screen name="Settings" component={Search} />
    </Navigator>
    </NavigationContainer>
  );
}