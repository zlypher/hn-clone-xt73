const HN_API_URL = 'http://hn.algolia.com/api/v1';

type Result<T, E> = Success<T> | Error<E>;
type Success<T> = {
	status: 'success';
	data: T;
};
type Error<E> = {
	status: 'error';
	error: E;
};

export type Comment = {
	id: number;
	text: string;
	points: number;
	parent_id: number;
	children: Comment[];
};

export type NewestStoryEntry = {
	num_comments: number;
	points: number;
	story_id: number;
	title: string;
	url: string;
	children: Comment[];
};

export type Story = {
	story_id: number;
	title: string;
	children: Comment[];
};

export async function loadStory(storyId: string): Promise<Result<Story, string>> {
	try {
		const response = await fetch(`${HN_API_URL}/items/${parseInt(storyId, 10)}`);
		const storyData = await response.json();

		return {
			status: 'success',
			data: storyData
		};
	} catch (error) {
		console.error('Error fetching story:', error);
		return {
			status: 'error',
			error: 'Failed to fetch story data.'
		};
	}
}

export async function loadNewestStories(): Promise<Result<NewestStoryEntry[], string>> {
	try {
		const response = await fetch(`${HN_API_URL}/search_by_date?tags=story`);
		const data = await response.json();

		return {
			status: 'success',
			data: data.hits
		};
	} catch (error) {
		console.error('Error fetching stories:', error);
		return {
			status: 'error',
			error: 'Failed to fetch stories.'
		};
	}
}
