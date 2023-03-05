import React, { useCallback, useState } from 'react';
import { Icon, Text } from 'native-base';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Components
import { InputSearch } from '../../components/InputSearch';
import { ListOrganizations } from '../../components/ListOrganizations';
import Button from '../../components/Button';

// Styles
import { Container } from '../../styles';

// Icons
import { ArrowRightWhite } from '../../utils/icons';

// Types
import { Org } from '../../types';
import { useInputSearchState } from '../../store/inputSearchState';
import { useQuery, useQueryClient } from 'react-query';
import { Loading } from '../../components/Loading';

interface Props {
	navigation: NativeStackNavigationProp<{ SAVED: undefined }, 'SAVED'>;
}

const Home: React.FC<Props> = ({ navigation }) => {
	const queryClient = useQueryClient();
	const { inputSearch, setInputSearch } = useInputSearchState();
	const [error, setError] = useState(false);

	const orgs = useQuery<Org | Org[], Error>(
		['organizations', { inputSearch }],
		async () => {
			const query =
				inputSearch === '' ? 'organizations' : `orgs/${inputSearch}`;
			const response = await fetch('https://api.github.com/' + query);
			const data: Org | Org[] = await response.json();

			return data;
		},
		{
			onError() {
				if (!error) setError(true);
			},
			onSuccess() {
				if (error) setError(false);
			},
		},
	);

	const handleSearch = useCallback(() => {
		if (inputSearch !== '') {
			queryClient.invalidateQueries({ queryKey: 'organizations' });
		}
	}, [inputSearch]);

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
			<Container alignItems="center">
				<InputSearch
					placeholder="Procurar organizações..."
					type="search"
					onChangeText={(text) => {
						setInputSearch(text);
					}}
					onPressRightElement={handleSearch}
				/>
				{orgs.isLoading && <Loading />}
				{orgs.isSuccess && <ListOrganizations orgs={orgs.data} error={error} />}
				<Button
					width={190}
					height={49}
					bg="background.secondary"
					position="absolute"
					bottom="10px"
					right="20px"
					onPress={() => navigation.navigate('SAVED')}
				>
					<Text fontSize={16} fontFamily="Arimo-Regular" color="text.primary">
						Ver salvos
					</Text>
					<Icon size={6} m={2} as={<ArrowRightWhite />} />
				</Button>
			</Container>
		</TouchableWithoutFeedback>
	);
};

export default Home;
