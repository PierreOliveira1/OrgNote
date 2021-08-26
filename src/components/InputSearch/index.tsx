import React, { useState, useRef } from 'react';
import { Box, Input } from 'native-base';

// Icons
import { ArrowLeft, Cancel, Search as IconSearch } from '../../utils/icons';

// Components
import Button from '../Button';

interface Props {
	placeholder: string;
	onChangeText?: any;
	onFocus?: any;
	onBlur?: any;
	onPress?: any;
	value?: string;
	marginTop?: string | number;
	type?: string;
}

const InputSearch = ({
	placeholder,
	onChangeText,
	onFocus,
	onBlur,
	onPress,
	value,
	marginTop,
	type,
}: Props): JSX.Element => {
	const [change, setChange] = useState(false);
	const input = useRef(null);

	if (type === 'saved')
		return (
			<Box
				style={{
					shadowColor: 'rgba(0, 0, 0, 0.12)',
					shadowOffset: {
						width: 2,
						height: 4,
					},
					elevation: 3,
					borderRadius: 14,
				}}
				bg="background.primary"
				marginTop={marginTop}
			>
				<Input
					ref={input}
					InputRightElement={
						<Button
							type="icon"
							icon={<Cancel />}
							onPress={onPress}
							marginLeft={0}
						/>
					}
					placeholder={placeholder}
					onChangeText={onChangeText}
					value={value}
					onFocus={() => {
						setChange(true);
						if (onFocus) onFocus();
					}}
					onBlur={() => {
						setChange(false);
						if (onBlur) onBlur();
					}}
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

	return (
		<Box
			style={{
				shadowColor: 'rgba(0, 0, 0, 0.12)',
				shadowOffset: {
					width: 2,
					height: 4,
				},
				elevation: 3,
				borderRadius: 14,
			}}
			bg="background.primary"
			marginTop={marginTop}
		>
			<Input
				ref={input}
				InputLeftElement={
					change ? (
						<Button
							type="icon"
							icon={<ArrowLeft />}
							size={8}
							onPress={() => {
								input?.current?.blur();
								onChangeText('');
							}}
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
						onPress={() => input?.current?.blur()}
						marginLeft={0}
					/>
				}
				placeholder={placeholder}
				onChangeText={onChangeText}
				value={value}
				onFocus={() => {
					setChange(true);
					if (onFocus) onFocus();
				}}
				onBlur={() => {
					setChange(false);
					if (onBlur) onBlur();
				}}
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

export default InputSearch;
