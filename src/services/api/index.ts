import { Org } from '../../types';

const BASE_URL = 'https://api.github.com';

const searchOrg = async (org: string) => {
	const data = await fetch(`${BASE_URL}/orgs/${org}`);
	const json: Org = await data.json();

	return json;
};

const getOrganizations = async () => {
	const data = await fetch(`${BASE_URL}/organizations`);
	const json: Org[] = await data.json();

	return json;
};

export { searchOrg, getOrganizations };
