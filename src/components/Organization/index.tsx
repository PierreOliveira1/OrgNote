import React, { useEffect, useState } from 'react';
import { Box, Image, Text } from 'native-base';

// Components
import Button from '../Button';

// Services
import {
	deleteSavedOrganization,
	getSavedOrganizations,
	savedOrganization,
} from '../../services/storage';

// Types
import { Org } from '../../types';

interface Props {
	org: Org;
	alt: string;
	marginBottom?: string | number;
	isSaved?: boolean;
}

const Organization = ({
	org,
	alt,
	marginBottom,
	isSaved,
}: Props): JSX.Element => {
	const [saved, setSaved] = useState(isSaved ?? false);

	async function getSaved() {
		try {
			const orgs: Org[] = await getSavedOrganizations();
			orgs.find((data: Org) => data.login === org.login) && setSaved(true);
		} catch (e) {
			throw new Error('Error to get saved organizations');
		}
	}

	useEffect(() => {
		if (!isSaved) getSaved();
	}, []);

	const onPress = async () => {
		if (!saved) {
			setSaved(true);
			await savedOrganization(org);
		} else {
			setSaved(false);
			await deleteSavedOrganization(org);
		}
	};

	return (
		<Box
			width="100%"
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
			marginTop="10px"
			marginBottom={marginBottom}
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
						textTransform="capitalize"
					>
						{`${org.login}`}
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
				onPress={onPress}
			/>
		</Box>
	);
};

export { Organization };
