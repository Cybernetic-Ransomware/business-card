<script lang="ts">
	import { fade } from 'svelte/transition';

	let {
		title,
		description,
		stack,
		status,
		href
	}: {
		title: string;
		description: string;
		stack: string[];
		status?: string;
		href?: string;
	} = $props();
</script>

<article
	class="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/5 bg-white/5 transition duration-300 hover:-translate-y-1 hover:border-hyper/40 hover:bg-white/10"
	transition:fade
>
	<div class="absolute inset-0 bg-[linear-gradient(135deg,_rgba(0,255,159,0.08),_rgba(26,140,255,0.05)_45%,_rgba(138,43,255,0.08)_80%)] opacity-80 transition duration-500 group-hover:opacity-100"></div>
	<div class="absolute -inset-32 rotate-12 bg-[radial-gradient(circle,_rgba(26,140,255,0.18),_transparent_60%)] opacity-0 transition duration-500 group-hover:opacity-100"></div>

	<div class="relative z-10 flex grow flex-col gap-4 p-6">
		<div class="flex flex-wrap items-center gap-2">
			{#if status}
				<span class="rounded-full border border-emerald/40 bg-emerald/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-emerald/90">
					{status}
				</span>
			{/if}
			<ul class="flex flex-wrap gap-2">
				{#each stack as item}
					<li class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.6rem] uppercase tracking-[0.18em] text-text-muted/80">
						{item}
					</li>
				{/each}
			</ul>
		</div>
		<h3 class="text-2xl font-semibold text-white">{title}</h3>
		<p class="grow text-sm text-text-muted/90">{description}</p>
		{#if href}
			<a
				href={href}
				class="mt-6 inline-flex w-fit items-center gap-2 text-sm font-medium text-emerald transition hover:gap-3"
			>
				View project
				<span aria-hidden="true">↗</span>
			</a>
		{/if}
	</div>
</article>
