<script lang="ts">
	import { Bookmark, BookMarkedIcon } from '@lucide/svelte';
	import Header from '../components/Header.svelte';
	import Story from '../components/Story.svelte';
	import type { PageProps } from './$types';
	import { bookmarks } from '$lib/boomarks.svelte';
	import StoryListItem from '../components/StoryListItem.svelte';

	let { data }: PageProps = $props();
	let bmarks = bookmarks();
	let filterBookmarks = $state(false);

	console.log(bmarks.current);

	let toggleBookmarkFilter = () => {
		filterBookmarks = !filterBookmarks;
	};
</script>

<Header>
	<div class="header-inner">
		<h1>Stories</h1>
		<button class="show-bookmarks" onclick={toggleBookmarkFilter}><Bookmark size={20} /></button>
	</div>
</Header>
<main>
	<section class="stories">
		{#if filterBookmarks}
			{#each data.stories as story}
				<StoryListItem>
					<Story {story} />
				</StoryListItem>
			{/each}
		{:else}
			{#each data.stories as story}
				<StoryListItem>
					<Story {story} />
				</StoryListItem>
			{/each}
		{/if}
	</section>
</main>

<style>
	.header-inner {
		display: flex;
		width: 100%;
		justify-content: space-between;
		align-items: center;
	}

	.show-bookmarks {
		background-color: thistle;
		border: none;
		cursor: pointer;
		border-radius: 50%;
		padding: 0.5rem;
	}

	.stories {
		display: flex;
		flex-direction: column;
	}
</style>
