import React, { useEffect, useState } from 'react';
import { Box, Text, Icon } from 'native-base';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Components
import Button from '../../components/Button';
import { InputSearch } from '../../components/InputSearch';
import Search from '../../components/Search';
import { ListOrganizations } from '../../components/ListOrganizations';

// Services
import {
	getSavedOrganizations,
	searchSavedOrganization,
} from '../../services/storage';

// Styles
import { Container } from '../../styles/index';

// Icons
import { ArrowLeft, SavedGray, Search as IconSearch } from '../../utils/icons';
import { Org } from '../../types';
import { Loading } from '../../components/Loading';

interface Props {
	navigation: NativeStackNavigationProp<any, any>;
}

const Saved = ({ navigation }: Props): JSX.Element => {
	const [isInput, setIsInput] = useState(false);
	const [textInput, setTextInput] = useState('');
	const [organizations, setOrganizations] = useState<Org[]>([]);
	const [error, setError] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		(async () => {
			setIsLoading(true);
			const data = await getSavedOrganizations();
			setOrganizations(data);
			setIsLoading(false);
		})();
	}, []);

	useEffect(() => {
		(async () => {
			setIsLoading(true);
			if (textInput.length === 0) {
				const data = await getSavedOrganizations();
				setOrganizations(data);
				setError(false);
				setIsLoading(false);
				return;
			}

			const getOrg = await searchSavedOrganization(textInput);
			if ('error' in getOrg) {
				setError(true);
			} else {
				setError(false);
				setOrganizations(getOrg);
			}
			setIsLoading(false);
		})();
	}, [textInput]);

	return (
		<Container alignItems="center">
			<Box
				width="90%"
				justifyContent="space-between"
				alignItems="center"
				flexDirection="row"
			>
				<Button
					type="icon"
					icon={<ArrowLeft />}
					size={7}
					onPress={() => navigation.goBack()}
				/>
				<Text fontSize={16} fontFamily="Arimo-Regular" color="#000">
					Suas organizações salvas
				</Text>
				<Button
					type="icon"
					icon={<IconSearch />}
					size={7}
					onPress={() => setIsInput(!isInput)}
				/>
			</Box>
			<Box
				width="100%"
				height="100%"
				alignItems="center"
				justifyContent="space-between"
			>
				{isInput && (
					<InputSearch
						type="saved"
						onPressRightElement={() => {
							setIsInput(!isInput);
							setTextInput('');
						}}
						placeholder="Procurar organizações..."
						onChangeText={setTextInput}
					/>
				)}
				{!isLoading ? (
					<>
						{organizations.length !== 0 ? (
							<>
								<ListOrganizations
									orgs={organizations}
									saved
									height={!isInput ? '100%' : undefined}
								/>
								{isLoading && <Loading />}
							</>
						) : (
							<Box
								width="80%"
								height="100%"
								justifyContent="center"
								alignItems="center"
								flexDirection="row"
							>
								<Text
									textAlign="center"
									fontSize={16}
									fontFamily="Arimo-Regular"
									color="#636363"
								>
									Sua lista de organizações está vazia. Clique no ícon
									<SavedGray width={16} height={16} /> para salvar uma
									organização
								</Text>
							</Box>
						)}
					</>
				) : (
					<Loading />
				)}
			</Box>
		</Container>
	);
};

export default Saved;
