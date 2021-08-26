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
	height?: string | number;
}

const ListOrganizations = ({ orgs, height }: Props): JSX.Element => {
	return (
		<Box width="100%" alignItems="center">
			<FlatList
				width="100%"
				height={height || '70%'}
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
