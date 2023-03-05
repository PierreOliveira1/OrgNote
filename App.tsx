import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { NativeBaseProvider } from 'native-base';
import { QueryClient, QueryClientProvider } from 'react-query';
import Theme from './src/styles/Theme';

// Routes
import Routes from './src/routes';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: false,
			refetchOnWindowFocus: false,
		},
	},
});

const App = () => {
	const [isLoadedFonts] = useFonts({
		'Arimo-Medium': require('./src/assets/Fontes/Arimo-Medium.ttf'),
		'Arimo-Regular': require('./src/assets/Fontes/Arimo-Regular.ttf'),
	});

	if (!isLoadedFonts) return <AppLoading />;

	return (
		<>
			<StatusBar
				translucent={false}
				backgroundColor="transparent"
				style="dark"
			/>
			<QueryClientProvider client={queryClient}>
				<NativeBaseProvider theme={Theme}>
					<Routes />
				</NativeBaseProvider>
			</QueryClientProvider>
		</>
	);
};

export default App;
