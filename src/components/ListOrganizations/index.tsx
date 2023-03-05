import React from 'react';
import { Box, FlatList, Icon, Text } from 'native-base';

// Components
import { Organization } from '../Organization';
import Search from '../Search';

// Types
import { Org } from '../../types';

import { Emphasis } from '../../utils/icons';

interface Props {
	orgs: Org[] | Org;
	saved?: boolean;
	height?: string | number;
	error?: boolean;
}

const ListOrganizations = ({
	orgs,
	saved,
	height,
	error,
}: Props): JSX.Element => {
	return (
		<>
			{Array.isArray(orgs) ? (
				<Box width="100%" alignItems="center" height="100%">
					{!saved && (
						<Box marginTop="5%" alignItems="center">
							<Icon as={<Emphasis />} marginBottom="10px" />
							<Text fontSize={22} fontFamily="Arimo-Medium">
								Organizações em destaque
							</Text>
							<Text fontSize={15} fontFamily="Arimo-Regular">
								Veja as organizações em tendência no GitHub.
							</Text>
						</Box>
					)}
					<Box width="100%" alignItems="center">
						<FlatList
							width="100%"
							height={height ? height : !saved ? '65%' : '80%'}
							contentContainerStyle={{
								alignItems: 'center',
								paddingBottom: '15%',
							}}
							marginTop="10px"
							data={orgs}
							keyExtractor={(_, index) => index.toString()}
							renderItem={({ item, index }) => (
								<Organization
									org={item}
									alt={`${item.login}`}
									marginBottom={index === orgs.length - 1 ? '5px' : '0px'}
									isSaved={saved}
								/>
							)}
						/>
					</Box>
				</Box>
			) : (
				<Search org={orgs} error={error} />
			)}
		</>
	);
};

export { ListOrganizations };
