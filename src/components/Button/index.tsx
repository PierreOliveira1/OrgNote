import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { Icon, Pressable, Text } from 'native-base';

interface Props {
	type?: 'icon' | string;
	icon?: any;
	size?: number;
	text?: string;
	onPress?: any;
	width?: string | number;
	height?: string | number;
	justifyContent?: string;
	alignItems?: string;
	marginLeft?: string | number;
	marginRight?: string | number;
}

const Button: FC<Props> = ({
	type,
	icon,
	size,
	children,
	text,
	onPress,
	width,
	height,
	justifyContent,
	alignItems,
	marginLeft,
	marginRight,
}) => {
	if (type === 'icon')
		return (
			<Pressable onPress={onPress}>
				<Icon
					as={icon}
					size={size}
					m={2}
					marginLeft={marginLeft}
					marginRight={marginRight}
				/>
			</Pressable>
		);

	return (
		<Pressable>
			<Text>{text}</Text>
		</Pressable>
	);
};

export default Button;
