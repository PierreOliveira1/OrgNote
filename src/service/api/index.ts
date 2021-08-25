const BASE_URL = 'https://api.github.com';

interface Org {
	name: string;
	avatar_url: string;
	description: string;
}

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

export {
	searchOrg
};
