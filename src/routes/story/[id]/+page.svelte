<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	console.log(data);
</script>

<h2>{data.title}</h2>
