<script lang="ts">
	import Header from '../components/Header.svelte';
	import Story from '../components/Story.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<Header></Header>
<main>
	<section class="stories">
		{#each data.stories as story}
			<Story {story} />
		{/each}
	</section>
</main>

<style>
	main {
	}

	.stories {
		display: flex;
		flex-direction: column;
	}
</style>
