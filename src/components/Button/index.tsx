import React, { FC } from 'react';
import { Icon, Pressable, Text } from 'native-base';

// Icons
import { SavedBlue, SavedWhite } from '../../utils/icons';

interface Props {
	type?: 'icon' | string;
	icon?: any;
	size?: number;
	onPress?: any;
	saved?: boolean;
	width?: string | number;
	height?: string | number;
	justifyContent?: string;
	alignItems?: string;
	marginLeft?: string | number;
	marginRight?: string | number;
	position?: string;
	top?: string | number;
	bottom?: string | number;
	left?: string | number;
	right?: string | number;
}

const Button: FC<Props> = ({
	type,
	icon,
	size,
	children,
	onPress,
	saved,
	width,
	height,
	justifyContent,
	alignItems,
	marginLeft,
	marginRight,
	position,
	top,
	bottom,
	left,
	right,
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

	if (type === 'save')
		return (
			<Pressable
				width={104}
				height="32px"
				justifyContent="center"
				alignItems="center"
				flexDirection="row"
				position={position}
				top={top}
				bottom={bottom}
				left={left}
				right={right}
				borderRadius={16}
				bg={saved ? 'background.secondary' : 'background.tertiary'}
				onPress={onPress}
			>
				<Icon
					size={5}
					as={saved ? <SavedWhite /> : <SavedBlue />}
					marginRight="5px"
				/>
				<Text
					fontSize={16}
					fontFamily="Arimo-Regular"
					color={saved ? 'text.primary' : 'text.secondary'}
				>
					{saved ? 'Salvo' : 'Salvar'}
				</Text>
			</Pressable>
		);

	return (
		<Pressable
			width={width || 'auto'}
			height={height || 'auto'}
			justifyContent={justifyContent || 'center'}
			alignItems={alignItems || 'center'}
			marginLeft={marginLeft || 0}
			marginRight={marginRight || 0}
		>
			{children}
		</Pressable>
	);
};

export default Button;
