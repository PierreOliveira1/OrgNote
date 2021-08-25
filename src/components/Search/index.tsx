import React, { useState, useRef } from 'react';
import { Box, Input } from 'native-base';

// Icons
import { ArrowLeft, Search as IconSearch } from '../../utils/icons';

// Components
import Button from '../Button';

interface Props {
	placeholder: string;
	onChangeText?: any;
	value?: string;
}

const Search = ({ placeholder, onChangeText, value }: Props): JSX.Element => {
	const [change, setChange] = useState(false);
	const input = useRef(null);

	return (
		<Box
			style={{
				shadowColor: 'rgba(0, 0, 0, 0.12)',
				shadowOffset: {
					width: 2,
					height: 4,
				},
				elevation: 5,
				borderRadius: 14,
			}}
			bg="background.primary"
		>
			<Input
				ref={input}
				InputLeftElement={
					change ? (
						<Button
							type="icon"
							icon={<ArrowLeft />}
							size={8}
							onPress={() => input?.current?.blur()}
							marginRight={0}
						/>
					) : (
						<Box />
					)
				}
				InputRightElement={
					<Button
						type="icon"
						icon={<IconSearch />}
						onPress={() => {
							alert('teste');
						}}
						marginLeft={0}
					/>
				}
				placeholder={placeholder}
				onChangeText={onChangeText}
				onFocus={() => setChange(true)}
				onBlur={() => setChange(false)}
				bg="background.primary"
				_focus={{ borderColor: 'transparent' }}
				width="90%"
				height={60}
				borderRadius={14}
				fontSize={16}
				fontFamily="Arimo-Regular"
				placeholderTextColor="#969696"
				borderColor="transparent"
				p={15}
			/>
		</Box>
	);
};

export default Search;
