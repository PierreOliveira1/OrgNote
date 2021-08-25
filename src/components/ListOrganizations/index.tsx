import React, { useEffect, useState } from 'react';
import { Box, FlatList, Icon, Text } from 'native-base';

// Icons
import { Emphasis } from '../../utils/icons';
import { getOrganizations } from '../../service/api';
import Organizations from '../Organizations';
import { Org } from '../../types';

const ListOrganizations = () => {
	const [orgs, setOrgs] = useState<Org[] | undefined[]>([]);

	useEffect(() => {
		(async () => {
			const data = await getOrganizations();
			setOrgs(data);
		})();
	}, []);

	return (
		<Box width="100%" marginTop="10%" alignItems="center">
			<Icon as={<Emphasis />} marginBottom="10px" />
			<Text fontSize={22} fontFamily="Arimo-Medium">
				Organizações em destaque
			</Text>
			<Text fontSize={15} fontFamily="Arimo-Regular">
				Veja as organizações em tendência no GitHub.
			</Text>
			<FlatList
				width="100%"
				contentContainerStyle={{
					alignItems: 'center',
				}}
				data={orgs}
				keyExtractor={(item) => item.name}
				renderItem={({ item }) => <Organizations org={item} alt={item.login} />}
			/>
		</Box>
	);
};

export default ListOrganizations;
