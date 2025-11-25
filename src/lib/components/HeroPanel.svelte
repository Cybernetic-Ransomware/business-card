<script lang="ts">
	import { fade } from 'svelte/transition';
	import ThermalKatanaScene from './ThermalKatanaScene.svelte';

export type Cta = {
	label: string;
	href: string;
	variant?: 'primary' | 'ghost';
	target?: string;
	rel?: string;
};

	let {
		name,
		role,
		tagline,
		ctas = []
	}: {
		name: string;
		role: string;
		tagline: string;
		ctas?: Cta[];
	} = $props();
</script>

<section class="relative overflow-hidden rounded-3xl border border-white/10 bg-surface-alt/90 backdrop-blur-xl">
	<div class="absolute inset-0 -skew-y-3 bg-gradient-to-r from-hyper/40 via-transparent to-emerald/40 blur-3xl"></div>
	<div class="absolute -inset-12 opacity-50">
		<div class="noise-overlay absolute inset-0"></div>
		<div class="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,255,159,0.15),_transparent_60%)]"></div>
	</div>

	<div class="relative z-10 grid gap-12 px-8 py-16 md:grid-cols-[1.1fr_0.9fr] md:px-12 md:py-20">
		<div>
			<p class="font-mono text-sm uppercase tracking-[0.35em] text-emerald" transition:fade>
				backend engineering
			</p>
			<h1
				class="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl"
				transition:fade={{ delay: 100 }}
			>
					<span class="bg-gradient-to-r from-emerald via-hyper to-pulse bg-clip-text text-transparent">
						{name}
					</span>
				</h1>
			<p class="mt-3 text-xl text-text-muted md:text-2xl" transition:fade={{ delay: 180 }}>
				{role}
			</p>

			<p class="mt-8 max-w-2xl text-lg text-text-muted/90" transition:fade={{ delay: 260 }}>
				{tagline}
			</p>

			<div class="mt-10 flex flex-wrap items-center gap-4" transition:fade={{ delay: 340 }}>
				{#each ctas as cta}
				<a
					href={cta.href}
					target={cta.target}
					rel={cta.rel}
					class="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-medium uppercase tracking-[0.25em] transition duration-300 hover:-translate-y-0.5 hover:border-white/30"
					class:glow-emerald={cta.variant !== 'ghost'}
						style={
							cta.variant !== 'ghost'
								? 'background: var(--color-emerald); color: var(--color-surface);'
								: 'background: color-mix(in srgb, var(--color-surface-alt) 70%, transparent); color: var(--color-emerald); border-color: rgba(0, 255, 159, 0.35);'
						}
					>
						{cta.label}
					</a>
				{/each}
			</div>
		</div>

		<div class="relative flex items-center justify-center md:justify-end">
			<ThermalKatanaScene />
		</div>
	</div>
</section>
