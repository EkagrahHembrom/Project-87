import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from "../screens/CreatePost";

const Tab = createBottomTabNavigator();

const createBottomTabNavigator= () => {
return (
<Tab.Navigator
    screenOptions={({ route})} => {
      let iconName;
      if (route.name === 'Feed') {
        iconNmae = focused
        ? 'book'
        : 'book-outline';
      } else if (route.name === 'CreatePost){
         iconName = focues ? 'create'  : 'create-outline';
    }
    return <Ionicons name={iconNmae} size={size} color={color}/>
},
})}
tabBarOptions={{
  activeTintColor: 'tomato',
  inactiveTintColor: 'gray'
}}
>
  <Tab.Screen name="Feed" component=[Feed] />
  <Tab.Screen name="CreatePost" component={CreatePost}/>
  <Tab.Navigator>
);
}

export default createBottomTabNavigator


      }
>
)
}