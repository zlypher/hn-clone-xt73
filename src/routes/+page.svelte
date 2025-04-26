<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<h2>Stories</h2>
<section class="stories">
	{#each data.stories as story}
		<article>
			<a href={`/story/${story.story_id}`} class="link">
				<h2 class="story-title" style={`view-transition-name: story-title-${story.story_id}`}>
					{story.title}
				</h2>
				<p>{story.points}</p>
				<p>{story.num_comments}</p>
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
