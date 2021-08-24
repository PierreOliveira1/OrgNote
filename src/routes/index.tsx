import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import Home from '../screens/Home';
import Saved from '../screens/Saved';

const Stack = createNativeStackNavigator();

const Routes = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}
			>
				<Stack.Screen name="HOME" component={Home} />
				<Stack.Screen name="SAVED" component={Saved} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Routes;
