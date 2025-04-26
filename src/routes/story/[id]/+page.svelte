<script lang="ts">
	import CommentList from './CommentList.svelte';

	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	console.log(data.children);
</script>

<h2 class="story-title" style={`view-transition-name: story-title-${data.story_id}`}>
	{data.title}
</h2>
<CommentList comments={data.children}></CommentList>

<style>
	.story-title {
	}
</style>
