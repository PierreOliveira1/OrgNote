import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import Organizations from '../../components/Organizations';
import Search from '../../components/Search';
import { searchOrg } from '../../service/api';

// Styles
import { Container } from '../../styles';

const Home = () => {
	const [org, setOrg] = useState({});

	useEffect(() => {
		(async () => {
			const fetchOrg = await searchOrg('Microsoft');
			setOrg(fetchOrg);
		})();
		console.log(org);
	}, []);

	return (
		<Container>
			<Organizations org={org} alt="teste" />
		</Container>
	);
};

export default Home;
