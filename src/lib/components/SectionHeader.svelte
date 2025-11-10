<script lang="ts">
	let {
		eyebrow,
		title,
		description
	}: { eyebrow: string; title: string; description?: string } = $props();
</script>

<header class="mb-10 space-y-4">
	<p class="font-mono text-xs uppercase tracking-[0.35em] text-emerald/80">
		{eyebrow}
	</p>
	<h2 class="text-3xl font-semibold text-white md:text-4xl">
		{title}
	</h2>
	{#if description}
		<p class="max-w-2xl text-base text-text-muted">
			{description}
		</p>
	{/if}
</header>
