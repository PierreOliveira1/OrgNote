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
	flexDirection?: string;
	marginLeft?: string | number;
	marginRight?: string | number;
	position?: string;
	top?: string | number;
	bottom?: string | number;
	left?: string | number;
	right?: string | number;
	bg?: string;
	borderRadius?: string | number;
	children?: JSX.Element | JSX.Element[];
}

const Button = ({
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
	flexDirection,
	marginLeft,
	marginRight,
	position,
	top,
	bottom,
	left,
	right,
	bg,
	borderRadius,
}: Props) => {
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
				position="absolute"
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
			flexDirection="row"
			position="absolute"
			top={top}
			bottom={bottom}
			left={left}
			right={right}
			marginLeft={marginLeft || 0}
			marginRight={marginRight || 0}
			bg={bg}
			borderRadius={borderRadius || 39}
			onPress={onPress}
		>
			{children}
		</Pressable>
	);
};

export default Button;
