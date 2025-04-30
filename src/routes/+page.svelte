<script lang="ts">
	import Header from '../components/Header.svelte';
	import Story from '../components/Story.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<Header>
	<h1>Stories</h1>
</Header>
<main>
	<section class="stories">
		{#each data.stories as story}
			<div class="story-item">
				<div class="action"></div>
				<div class="story-wrapper">
					<Story {story} />
				</div>
				<div class="action"></div>
			</div>
		{/each}
	</section>
</main>

<style>
	.stories {
		display: flex;
		flex-direction: column;
	}

	.story-item {
		display: flex;
		overflow: auto;
		overflow-x: scroll;
		scroll-snap-type: x mandatory;

		&::-webkit-scrollbar {
			display: none;
		}
	}

	.story-wrapper {
		scroll-snap-align: center;
		min-width: 100%;
	}

	.action {
		min-width: 40%;
		background-color: cadetblue;
	}
</style>
