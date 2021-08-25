import React, { useState } from 'react';
import { Text } from 'react-native';
import Search from '../../components/Search';

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
			<Search placeholder="Organizations" />
		</Container>
	);
};

export default Home;
