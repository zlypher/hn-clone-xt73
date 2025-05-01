import type { NewestStoryEntry } from './hn-client';

export function bookmarks() {
	if (typeof window === 'undefined') {
		return [];
	}

	const existing = localStorage.getItem('bookmarks');
	let state = $state<NewestStoryEntry[]>(
		existing ? (JSON.parse(existing) as NewestStoryEntry[]) : []
	);

	$effect(() => {
		localStorage.setItem('bookmarks', JSON.stringify(state));
	});

	return {
		get current() {
			return state;
		},
		set current(newValue: NewestStoryEntry[]) {
			state = newValue;
		}
	};
}
