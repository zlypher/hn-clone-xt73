<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
		onSwipeLeft?: () => void;
		onSwipeRight?: () => void;
	}

	let { children, onSwipeLeft, onSwipeRight }: Props = $props();

	let containerRef = $state<HTMLElement | null>(null);
	const minSwipeDistance = 80;

	function handleSwipe() {
		if (!containerRef) return;

		const target = containerRef;
		// TODO
		const distance =
			target.scrollLeft - target.clientWidth * 0.4; /* Needs to match width of action */

		console.log({
			distance,
			scrollLeft: target.scrollLeft,
			clientWidth: target.clientWidth
		});

		if (distance < minSwipeDistance * -1) {
			onSwipeLeft?.();
		} else if (distance > minSwipeDistance) {
			onSwipeRight?.();
		}
	}
</script>

<div bind:this={containerRef} class="story-item" ontouchend={handleSwipe}>
	<div class="action"></div>
	<div class="story-wrapper">
		{@render children()}
	</div>
	<div class="action"></div>
</div>

<style>
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
