<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	console.log(data);
</script>

<h2 class="story-title" style={`view-transition-name: story-title-${data.story_id}`}>
	{data.title}
</h2>

<style>
	.story-title {
	}
</style>
