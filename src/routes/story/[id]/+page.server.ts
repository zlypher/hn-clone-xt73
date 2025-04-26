import { loadStory } from '$lib/hn-client';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const result = await loadStory(params.id);
	if (result.status === 'error') {
		error(404, 'Story not found');
	}

	return {
		...result.data
	};
};
