import React from 'react';
import { ActivityIndicator } from 'react-native';

import * as Styles from './styles';

function Loading() {
	return (
		<Styles.Container>
			<ActivityIndicator size="large" color="#2196f3" animating={true} />
		</Styles.Container>
	);
}

export { Loading };
