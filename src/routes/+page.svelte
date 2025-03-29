<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	console.log(data);
</script>

<h2>Posts</h2>
<section class="stories">
	{#each data.posts as post}
		<article>
			<a href={`/story/${post.story_id}`} class="link">
				<h2 class="story-title" style={`view-transition-name: story-title-${post.story_id}`}>
					{post.title}
				</h2>
				<p>{post.points}</p>
			</a>
		</article>
	{/each}
</section>

<style>
	.stories {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.link {
		display: block;
		padding: 4px;
	}

	.story-title {
		font-size: 1.1rem;
		font-weight: bold;
		color: #333;
	}
</style>
