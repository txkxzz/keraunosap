import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';

import Home from './home'
import Profile from './profile'
import Box from './box'

 
const Tab = createBottomTabNavigator();


function Routes() {
    return(
        <Tab.Navigator>
            <Tab.Screen
            name="Home"
            component={Home}
            />

        <Tab.Screen
            name="Profile"
            component={Profile}
            />

        <Tab.Screen
            name="Carrinho"
            component={Box}
            />
        </Tab.Navigator>
    )
}
 

export default Routes;