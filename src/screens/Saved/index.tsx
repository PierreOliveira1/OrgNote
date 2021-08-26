import React, { useEffect, useState } from 'react';
import { Box, Text, Icon } from 'native-base';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Components
import Button from '../../components/Button';
import InputSearch from '../../components/InputSearch';
import Search from '../../components/Search';
import ListOrganizations from '../../components/ListOrganizations';

// Services
import {
	getSavedOrganizations,
	searchSavedOrganization,
} from '../../service/storage';

// Styles
import { Container } from '../../styles';

// Icons
import { ArrowLeft, SavedGray, Search as IconSearch } from '../../utils/icons';
import { Org } from '../../types';

interface Props {
	navigation: NativeStackNavigationProp<any, any>;
}

const Saved = ({ navigation }: Props): JSX.Element => {
	const [isInput, setIsInput] = useState(false);
	const [textInput, setTextInput] = useState('');
	const [organizations, setOrganizations] = useState([]);
	const [org, setOrg] = useState<Org>({});
	const [error, setError] = useState(false);

	useEffect(() => {
		(async () => {
			const data = await getSavedOrganizations();
			setOrganizations(data);
		})();
	}, []);

	useEffect(() => {
		(async () => {
			const getOrg: any = await searchSavedOrganization(textInput);
			if (getOrg.error) {
				return setError(true);
			} else {
				setError(false);
				return setOrg(getOrg);
			}
		})();
	}, [textInput]);

	return (
		<Container alignItems="center">
			<Box
				width="90%"
				justifyContent="space-between"
				alignItems="center"
				flexDirection="row"
				marginTop="10%"
			>
				<Button
					type="icon"
					icon={<ArrowLeft />}
					onPress={() => navigation.goBack()}
				/>
				<Text fontSize={16} fontFamily="Arimo-Regular" color="#000">
					Suas organizações salvas
				</Text>
				<Button
					type="icon"
					icon={<IconSearch />}
					onPress={() => setIsInput(!isInput)}
				/>
			</Box>
			{isInput && (
				<InputSearch
					type="saved"
					onPress={() => {
						setIsInput(!isInput);
						setTextInput('');
					}}
					placeholder="Procurar organizações..."
					onChangeText={setTextInput}
					value={textInput}
				/>
			)}
			{textInput === '' ? (
				organizations.length !== 0 ? (
					<ListOrganizations height="100%" orgs={organizations} />
				) : (
					<Box width="80%" flexDirection="row">
						<Text
							textAlign="center"
							fontSize={16}
							fontFamily="Arimo-Regular"
							color="#636363"
						>
							Sua lista de organizações está vazia. Clique no ícon
							<SavedGray width={16} height={16} /> para salvar uma organização
						</Text>
					</Box>
				)
			) : (
				<Search org={org} error={error} />
			)}
		</Container>
	);
};

export default Saved;
