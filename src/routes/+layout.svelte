<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

{@render children()}

<style>
	:global {
		@view-transition {
			navigation: auto;
		}
	}
</style>
