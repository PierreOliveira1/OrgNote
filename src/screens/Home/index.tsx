import React, { useState } from 'react';
import { Text } from 'react-native';

// Styles
import { Container } from '../../styles';

const Home = () => {
	return (
		<Container>
			<Text
				style={{
					fontSize: 20,
					fontFamily: 'Arimo-Regular',
				}}
			>
				Home
			</Text>
		</Container>
	);
};

export default Home;
