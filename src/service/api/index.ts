const BASE_URL = 'https://api.github.com';

const searchOrg = async (org: string) => {
	try {
		const data = await fetch(`${BASE_URL}/orgs/${org}`);
		const json = await data.json();

		if(json.message)
			return { error: 'Error searching organization' };

		return json;
	} catch (e) {
		return { error: 'Error searching organization' };
	}
};

const getOrganizations = async () => {
	try {
		const data = await fetch(`${BASE_URL}/organizations`);
		const json = await data.json();

		if(json.message)
			return { error: 'Error capturing organizations' };

		return json;
	} catch (e) {
		return { error: 'Error capturing organizations' };
	}
};

export {
	searchOrg,
	getOrganizations
};
