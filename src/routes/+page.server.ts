import { loadNewestStories } from '$lib/hn-client';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const result = await loadNewestStories();
	if (result.status === 'error') {
		error(500, 'Could not load newest stories');
	}

	return {
		stories: result.data
	};
};
