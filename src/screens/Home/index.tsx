import React, { useEffect, useState } from 'react';
import { Icon, Text } from 'native-base';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

// Services
import { getOrganizations, searchOrg } from '../../service/api';

// Components
import InputSearch from '../../components/InputSearch';
import ListOrganizations from '../../components/ListOrganizations';
import Button from '../../components/Button';
import Search from '../../components/Search';

// Styles
import { Container } from '../../styles';

// Icons
import { ArrowRightWhite } from '../../utils/icons';

// Types
import { Org } from '../../types';

interface Props {
	navigation: NativeStackNavigationProp<any, any>;
}

const Home: React.FC<Props> = ({ navigation }) => {
	const [textInput, setTextInput] = useState('');
	const [error, setError] = useState(false);
	const [organizations, setOrganizations] = useState<Org[]>([]);
	const [org, setOrg] = useState({});

	useEffect(() => {
		(async () => {
			const data = await getOrganizations();
			setOrganizations(data);
		})();
	}, []);

	useEffect(() => {
		(async () => {
			const getOrg: any = await searchOrg(textInput);
			if (getOrg.error) {
				return setError(true);
			} else {
				setError(false);
				return setOrg(getOrg);
			}
		})();
	}, [textInput]);

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
			<Container alignItems="center">
				<InputSearch
					placeholder="Procurar organizações..."
					marginTop="15%"
					onChangeText={setTextInput}
					value={textInput}
				/>
				{textInput === '' ? (
					<ListOrganizations orgs={organizations} />
				) : (
					<Search org={org} error={error} />
				)}
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
