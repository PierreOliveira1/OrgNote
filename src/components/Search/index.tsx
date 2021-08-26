import React from 'react';
import { Box, Icon, Text } from 'native-base';

// Icons
import { EmojiSad } from '../../utils/icons';

// Components
import Organization from '../Organization';

// Types
import { Org } from '../../types';

interface Props {
	org?: Org;
	error?: boolean;
}

const Search = ({ org, error }: Props): JSX.Element => {
	return (
		<Box width="90%" alignItems="center" marginTop="10%">
			{error ? (
				<Box width="90%" alignItems="center">
					<Icon as={<EmojiSad />} />
					<Text
						color="text.tertiary"
						fontSize={16}
						fontFamily="Arimo-Regular"
						textAlign="center"
						marginTop={2}
					>
						Oops! Não encontramos organizações com este nome.
					</Text>
				</Box>
			) : (
				<Organization org={org} alt={org.login || String(Date.now())} />
			)}
		</Box>
	);
};

export default Search;
