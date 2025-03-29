import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	console.log(params.id);
	const response = await fetch('http://hn.algolia.com/api/v1/items/' + parseInt(params.id, 10));
	const data = await response.json();

	return {
		...data
	};
};
