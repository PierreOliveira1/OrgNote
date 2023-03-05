import AsyncStorage from '@react-native-async-storage/async-storage';

// Types
import { Org } from '../../types';

const getSavedOrganizations = async (): Promise<Org[]> => {
	const orgs = await AsyncStorage.getItem('@organizations');
	return orgs !== null ? JSON.parse(orgs) : [];
};

const savedOrganization = async (org: Org) => {
	try {
		const orgs = await getSavedOrganizations();
		orgs.push(org);
		orgs.sort((a, b) => (a.login > b.login) ? 1 : ((b.login > a.login) ? -1 : 0));
		await AsyncStorage.setItem('@organizations', JSON.stringify(orgs));
	} catch (e) {
		throw new Error('Error saving organization');
	}
};

const deleteSavedOrganization = async (org: Org) => {
	try {
		const orgs: Org[] = await getSavedOrganizations();
		const newOrgs: Org[] = orgs.filter((data: Org) => data.login !== org.login);
		await AsyncStorage.setItem('@organizations', JSON.stringify(newOrgs));
	} catch(e) {
		throw new Error('Error deleting organization');
	}
};

const searchSavedOrganization = async (org: string) => {
	try {
		org = org.trim().toLowerCase();
		const orgs: Org[] = await getSavedOrganizations();
		const searchOrg = orgs.filter((data) => {
			if (data.login.toLowerCase().includes(org))
				return data;
		});

		if(!searchOrg)
			return { error: 'Error searching organization' }

		return searchOrg;
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
