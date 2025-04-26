<script lang="ts">
	let { story } = $props();
</script>

<article>
	<a href={`/story/${story.story_id}`} class="link">
		<h2 class="title" style={`view-transition-name: story-title-${story.story_id}`}>
			{story.title}
		</h2>
		<footer>
			<span class="points">Points: {story.points}</span>
			<span class="comments">Comments: {story.num_comments}</span>
		</footer>
	</a>
</article>

<style>
	article:nth-child(even) {
		background-color: #f0f0f0;
	}

	.link {
		display: block;
		padding-inline: 1rem;
		padding-block: 1rem;
	}

	.title {
		font-weight: bold;
		color: #333;
	}

	footer {
		font-size: 0.8rem;
		color: #333;
	}

	.points {
	}
</style>
