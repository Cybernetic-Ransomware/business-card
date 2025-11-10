<script lang="ts">
	import { fly } from 'svelte/transition';

	let {
		title,
		period,
		organization,
		description,
		metrics
	}: {
		title: string;
		period: string;
		organization: string;
		description: string;
		metrics?: string[];
	} = $props();
</script>

<div class="relative pl-10" in:fly={{ x: -24, duration: 320 }}>
	<div class="absolute left-0 top-1/2 h-px w-6 -translate-y-1/2 bg-gradient-to-r from-pulse/40 via-emerald/80 to-transparent"></div>
	<div class="absolute -left-1 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-emerald shadow-[0_0_12px_rgba(0,255,159,0.7)]"></div>

	<div class="rounded-2xl border border-white/5 bg-white/5 p-6 shadow-[0_10px_40px_rgba(8,12,20,0.35)]">
		<div class="flex flex-wrap items-center justify-between gap-2 text-sm text-text-muted uppercase tracking-[0.2em]">
			<span>{period}</span>
			<span>{organization}</span>
		</div>
		<h3 class="mt-4 text-2xl font-semibold text-white">{title}</h3>
		<p class="mt-3 text-sm text-text-muted/90">{description}</p>
		{#if metrics?.length}
			<ul class="mt-4 space-y-1 text-xs text-emerald/80">
				{#each metrics as metric}
					<li>➤ {metric}</li>
				{/each}
			</ul>
		{/if}
	</div>
</div>
