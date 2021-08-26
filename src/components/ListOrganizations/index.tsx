import React, { useEffect, useState } from 'react';
import { Box, FlatList, Icon, Text } from 'native-base';

// Icons
import { Emphasis } from '../../utils/icons';

// Components
import Organizations from '../Organization';

// Types
import { Org } from '../../types';

interface Props {
	orgs: Org[];
}

const ListOrganizations = ({ orgs }: Props): JSX.Element => {
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
				height="60%"
				contentContainerStyle={{
					alignItems: 'center',
				}}
				marginTop="10px"
				data={orgs}
				keyExtractor={(_, index) => index.toString()}
				renderItem={({ item, index }) => (
					<Organizations
						org={item}
						alt={item.login}
						marginBottom={index === orgs.length - 1 ? '5px' : '0px'}
					/>
				)}
			/>
		</Box>
	);
};

export default ListOrganizations;
