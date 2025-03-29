import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const response = await fetch('http://hn.algolia.com/api/v1/search_by_date?tags=story');
	const data = await response.json();
	const posts = data.hits;

	return {
		posts
	};
};
