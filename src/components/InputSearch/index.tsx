import React, { memo, useRef, useState } from 'react';
import {
	NativeSyntheticEvent,
	TextInputFocusEventData,
	TextInputProps,
} from 'react-native';
import { TextInput } from 'react-native';
import { ArrowLeft, Cancel, Search } from '../../utils/icons';
import Button from '../Button';

import * as Styles from './styles';

interface Props extends TextInputProps {
	type?: 'search' | 'saved';
	onPressRightElement?: () => void;
	onPressLeftElement?: () => void;
}

function InputSearchComponent(props: Props) {
	const {
		type,
		onFocus,
		onBlur,
		onChangeText,
		onPressRightElement,
		onPressLeftElement,
		...rest
	} = props;
	const [isFocused, setIsFocused] = useState(false);
	const inputRef = useRef<TextInput>(null);
	const [value, setValue] = useState<string>('');

	function handleWidth(): string {
		if (value?.length ?? isFocused) return '80%';
		return '90%';
	}

	const isLeftElementSearch = value?.length ?? isFocused ? true : false;

	return (
		<Styles.Container>
			{isLeftElementSearch && (
				<Styles.BoxIcon>
					<Button
						type="icon"
						icon={<ArrowLeft />}
						size={7}
						onPress={() => {
							setIsFocused(false);
							setValue('');
							if (inputRef && 'current' in inputRef) {
								inputRef.current?.clear();
								inputRef.current?.blur();
							}
							onPressLeftElement && onPressLeftElement();
							onChangeText && onChangeText('');
						}}
						marginRight={0}
					/>
				</Styles.BoxIcon>
			)}
			<Styles.TextInput
				ref={inputRef}
				width={handleWidth()}
				isFocused={value?.length ?? isFocused}
				placeholderTextColor="#969696"
				onFocus={(event: NativeSyntheticEvent<TextInputFocusEventData>) => {
					setIsFocused(true);
					onFocus && onFocus(event);
				}}
				onBlur={(event: NativeSyntheticEvent<TextInputFocusEventData>) => {
					setIsFocused(false);
					onBlur && onBlur(event);
				}}
				onChangeText={(text: string) => {
					setValue(text);
					onChangeText && onChangeText(text);
				}}
				defaultValue={value}
				{...rest}
			/>
			<Styles.BoxIcon>
				{type === 'search' && (
					<Button
						type="icon"
						icon={<Search />}
						size={6}
						onPress={onPressRightElement}
						marginLeft={0}
					/>
				)}
				{type === 'saved' && (
					<Button
						type="icon"
						icon={<Cancel />}
						size={6}
						marginLeft={0}
						onPress={onPressRightElement}
					/>
				)}
			</Styles.BoxIcon>
		</Styles.Container>
	);
}

const InputSearch = memo(InputSearchComponent);

export { InputSearch };
