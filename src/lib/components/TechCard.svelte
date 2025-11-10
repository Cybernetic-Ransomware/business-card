<script lang="ts">
	import { fly } from 'svelte/transition';

	let {
		title,
		category,
		description,
		highlight
	}: {
		title: string;
		category: string;
		description: string;
		highlight?: string;
	} = $props();
</script>

<article
	class="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald/40 hover:bg-white/10"
	in:fly={{ y: 32, duration: 350 }}
>
	<div class="absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100">
		<div class="absolute inset-0 bg-gradient-to-br from-emerald/20 via-hyper/10 to-pulse/20 blur-2xl"></div>
	</div>

	<div class="relative space-y-3">
		<p class="font-mono text-[0.7rem] uppercase tracking-[0.35em] text-text-muted">
			{category}
		</p>
		<h3 class="text-xl font-semibold text-white">{title}</h3>
		<p class="text-sm text-text-muted/90">{description}</p>
		{#if highlight}
			<p class="text-xs text-emerald/80">{highlight}</p>
		{/if}
	</div>
</article>
