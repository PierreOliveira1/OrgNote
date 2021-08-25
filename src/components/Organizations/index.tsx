import React, { useState } from 'react';
import { Box, Image, Text } from 'native-base';

// Components
import Button from '../Button';

interface Org {
	name?: string;
	avatar_url?: string;
	description?: string;
}

interface Props {
	org: Org;
	alt: string;
}

const Organizations = ({ org, alt }: Props): JSX.Element => {
	const [saved, setSaved] = useState(false);

	return (
		<Box
			width="90%"
			height="auto"
			minHeight="85px"
			bg="background.primary"
			alignItems="flex-end"
			p={14}
			borderRadius={14}
			style={{
				shadowColor: 'rgba(0, 0, 0, 0.12)',
				shadowOffset: {
					width: 2,
					height: 4,
				},
				elevation: 3,
			}}
		>
			<Box width="100%" flexDirection="row">
				<Image
					resizeMode="contain"
					width={50}
					height={50}
					alt={alt}
					source={{ uri: org.avatar_url }}
				/>
				<Box width="70%" flexShrink={1} marginLeft="12px">
					<Text
						marginBottom={-1}
						fontSize={16}
						fontFamily="Arimo-Regular"
						color="text.secondary"
					>
						{org.name}
					</Text>
					{org.description && (
						<Text
							color="text.tertiary"
							fontSize={16}
							fontFamily="Arimo-Regular"
							textAlign="justify"
							marginBottom="40px"
						>
							{org.description}
						</Text>
					)}
				</Box>
			</Box>
			<Button
				type="save"
				saved={saved}
				position="absolute"
				right={14}
				bottom={14}
				onPress={() => setSaved(!saved)}
			/>
		</Box>
	);
};

export default Organizations;
