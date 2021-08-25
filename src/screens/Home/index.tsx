import React, { useState, useEffect } from 'react';

// Services
import { searchOrg } from '../../service/api';

// Components
import Organizations from '../../components/Organizations';
import Search from '../../components/Search';

// Styles
import { Container } from '../../styles';
import ListOrganizations from '../../components/ListOrganizations';

const Home = () => {
	const [org, setOrg] = useState({});

	useEffect(() => {
		(async () => {
			const fetchOrg = await searchOrg('Microsoft');
			setOrg(fetchOrg);
		})();
	}, []);

	return (
		<Container alignItems="center">
			<Search placeholder="Procurar organizações..." marginTop="15%" />
			<ListOrganizations />
		</Container>
	);
};

export default Home;
