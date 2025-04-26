<script lang="ts">
	import type { Comment } from '$lib/hn-client';

	type Props = {
		comments: Comment[];
	};
	let { comments }: Props = $props();

	console.log(comments);
</script>

<ul>
	{#each comments as comment}
		<li>
			<p>{comment.text}</p>
		</li>
	{/each}
</ul>

<style>
	.story-title {
	}
</style>
