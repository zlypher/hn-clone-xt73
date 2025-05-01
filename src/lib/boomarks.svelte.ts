export function bookmarks() {
	if (typeof window === 'undefined') {
		return [];
	}

	const existing = localStorage.getItem('bookmarks');
	let state = $state<object[]>(existing ? (JSON.parse(existing) as object[]) : []);

	$effect(() => {
		localStorage.setItem('bookmarks', JSON.stringify(state));
	});

	return {
		get current() {
			return state;
		},
		set current(newValue: object[]) {
			state = newValue;
		}
	};
}
