import AsyncStorage from '@react-native-async-storage/async-storage';

// Types
import { Org } from '../../types';

const getSavedOrganizations = async () => {
	const orgs = await AsyncStorage.getItem('@organizations');
	return orgs !== null ? JSON.parse(orgs) : [];
};

const savedOrganization = async (org: Org) => {
	try {
		const orgs: any[] = await getSavedOrganizations();
		orgs.push(org);
		orgs.sort((a, b) => (a.login > b.login) ? 1 : ((b.login > a.login) ? -1 : 0));
		await AsyncStorage.setItem('@organizations', JSON.stringify(orgs));
	} catch (e) {}
};

const deleteSavedOrganization = async (org: Org) => {
	try {
		const orgs: Org[] = await getSavedOrganizations();
		const newOrgs: Org[] = orgs.filter((data: Org) => data.login !== org.login);
		await AsyncStorage.setItem('@organizations', JSON.stringify(newOrgs));
	} catch(e) {}
};

const searchSavedOrganization = async (org: string) => {
	try {
		const orgs: Org[] = await getSavedOrganizations();
		const searchOrg = orgs.filter((data: Org) => data.login === org || data.name === org);
		const [response] = searchOrg;
		if(!response)
			return { error: 'Error searching organization' }
		return response;
	} catch(e) {
		return { error: 'Error searching organization' }
	}
};

export {
	getSavedOrganizations,
	savedOrganization,
	deleteSavedOrganization,
	searchSavedOrganization
};
