<script lang="ts">
	let { children } = $props();
</script>

<div class="story-item">
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
