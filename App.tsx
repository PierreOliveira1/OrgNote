import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { NativeBaseProvider } from 'native-base';
import Theme from './src/styles/Theme';

// Routes
import Routes from './src/routes';

const App = () => {
	const [isLoadedFonts] = useFonts({
		'Arimo-Medium': require('./src/assets/Fontes/Arimo-Medium.ttf'),
		'Arimo-Regular': require('./src/assets/Fontes/Arimo-Regular.ttf'),
	});

	if (!isLoadedFonts) return <AppLoading />;

	return (
		<>
			<StatusBar translucent backgroundColor="transparent" style="dark" />
			<NativeBaseProvider theme={Theme}>
				<Routes />
			</NativeBaseProvider>
		</>
	);
};

export default App;
