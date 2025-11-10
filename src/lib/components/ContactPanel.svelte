<script lang="ts">
	import { fade } from 'svelte/transition';

	let {
		email,
		timezone,
		socials
	}: {
		email: string;
		timezone: string;
		socials: { label: string; href: string }[];
	} = $props();

	function copyEmail() {
		if (typeof navigator !== 'undefined' && navigator.clipboard) {
			navigator.clipboard.writeText(email).catch(() => {
				// clipboard permission may be denied; ignore
			});
		}
	}
</script>

<section class="relative overflow-hidden rounded-3xl border border-white/10 bg-surface-alt/90 p-8 md:p-12">
	<div class="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(255,51,85,0.15),_transparent_60%)] opacity-80"></div>
	<div class="absolute inset-0 bg-[linear-gradient(160deg,_rgba(0,255,159,0.12),_rgba(26,140,255,0.08)_50%,_transparent_80%)]"></div>
	<div class="relative z-10 space-y-6" transition:fade>
		<p class="font-mono text-xs uppercase tracking-[0.35em] text-emerald/80">
			terminal
		</p>
		<pre class="overflow-x-auto rounded-xl border border-white/5 bg-black/40 p-6 font-mono text-sm text-emerald/80 shadow-[0_15px_40px_rgba(4,10,18,0.55)]">
<code>&gt; reach_me --email "{email}"
&gt; reach_me --alt "aleksander.marszalkiewicz.pp@gmail.com"
&gt; schedule --cal "{timezone}"
&gt; connect --channels {JSON.stringify(socials.map((s) => s.label))}
&gt; ping --discord "422570242275934219"</code>
		</pre>
		<div class="flex flex-wrap items-center gap-4">
			<button
				onclick={copyEmail}
				class="inline-flex items-center gap-2 rounded-full border border-emerald/40 px-6 py-2 text-sm font-medium uppercase tracking-[0.25em] text-emerald transition hover:-translate-y-0.5 hover:bg-white/10"
			>
				Copy email
				<span aria-hidden="true">⎘</span>
			</button>
			<nav class="flex flex-wrap gap-3">
				{#each socials as social}
					<a
						href={social.href}
						class="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-text-muted transition hover:-translate-y-0.5 hover:border-hyper/50 hover:text-white"
					>
						{social.label}
						<span aria-hidden="true">↗</span>
					</a>
				{/each}
			</nav>
		</div>
	</div>
</section>
