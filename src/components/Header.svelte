<script lang="ts">
	let { children } = $props();
</script>

<header class="header">
	{@render children?.()}
</header>

<style>
	.header {
		display: flex;
		height: 48px;
		align-items: center;
		background-color: aliceblue;
		padding-inline: 16px;
		font-size: 20px;
		font-weight: bold;
	}
</style>
