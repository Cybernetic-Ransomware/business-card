<script lang="ts">
	import { fly } from 'svelte/transition';

	export type ToolTag = {
		label: string;
		category: string;
		description: string;
	};

	let { tags = [] }: { tags: ToolTag[] } = $props();
</script>

<div class="flex flex-wrap gap-3">
	{#each tags as tag, index (tag.label)}
		<div
			class="group relative cursor-default overflow-hidden rounded-full border border-white/5 bg-white/5 px-6 py-2 text-sm text-text-muted transition duration-300 hover:-translate-y-0.5 hover:border-emerald/40 hover:text-white"
			style={`animation-delay: ${index * 60}ms`}
			in:fly={{ y: 16, duration: 260 }}
		>
			<span class="font-mono text-[0.65rem] uppercase tracking-[0.35em] text-text-muted/70">
				{tag.category}
			</span>
			<p class="text-base font-medium text-white">{tag.label}</p>
			<div
				class="pointer-events-none absolute left-1/2 top-full z-10 mt-2 w-56 -translate-x-1/2 scale-95 rounded-xl border border-white/10 bg-surface-alt/95 p-4 text-xs text-text-muted opacity-0 shadow-[0_20px_40px_rgba(4,10,20,0.45)] transition duration-300 group-hover:scale-100 group-hover:opacity-100"
			>
				{tag.description}
			</div>
		</div>
	{/each}
</div>
