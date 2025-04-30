<script lang="ts">
	import CommentList from './CommentList.svelte';

	import type { PageProps } from './$types';
	import Header from '../../../components/Header.svelte';
	import { ArrowLeft } from '@lucide/svelte';
	import { extractDomain } from '$lib/extract-domain';
	import { formatDate } from '$lib/format-date';

	let { data }: PageProps = $props();
	// console.log(data.children);
	console.log(data);
</script>

<Header>
	<h1><a class="headline" href="/"><ArrowLeft />Back</a></h1>
</Header>
<main>
	<section class="story">
		<h2 class="title" style={`view-transition-name: story-title-${data.story_id}`}>
			{data.title}
			<div class="subtitle">
				{#if data.url}<span>{extractDomain(data.url)} • </span>{/if}
				<span>{data.points} points by {data.author} | {formatDate(data.created_at)}</span>
			</div>
		</h2>
		<div class="links">
			<a class="link-external" href={data.url}>View Article</a>
			<a class="link-external" href={`https://news.ycombinator.com/item?id=${data.id}`}
				>View on Hackernews</a
			>
		</div>
	</section>
	<section class="comments">
		{#if data.children?.length > 0}
			<CommentList comments={data.children}></CommentList>
		{:else}
			<p>No comments available.</p>
		{/if}
	</section>
</main>

<style>
	.headline {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.story {
		padding: 1rem;
	}

	.subtitle {
		font-size: 0.9rem;
		color: #555;
		margin-top: 0.5rem;
	}

	.links {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		color: #0070f3;
		text-decoration: none;
		font-size: 0.9rem;
		margin-top: 1rem;
	}

	.comments {
		border-top: 1px solid #ccc;
		padding: 1rem;
	}
</style>
