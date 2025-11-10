<script lang="ts">
	import { fade } from 'svelte/transition';

	export type ActivityItem = {
		id?: string;
		repo: string;
		action: string;
		description?: string;
		created_at?: string;
		timeAgo?: string;
		href?: string;
	};

	let {
		items = [],
		initialVisible = 5,
		maxItems = 10,
		emptyMessage = 'Brak ostatnich aktywności – sprawdź ponownie wkrótce.'
	}: {
		items?: ActivityItem[];
		initialVisible?: number;
		maxItems?: number;
		emptyMessage?: string;
	} = $props();

	let expanded = $state(false);

	const limitedItems = $derived(items.slice(0, maxItems));
	const visibleItems = $derived(
		expanded ? limitedItems : limitedItems.slice(0, Math.min(initialVisible, maxItems))
	);

	function formatRelative(iso?: string, fallback?: string) {
		if (!iso) return fallback ?? '';
		const now = Date.now();
		const then = new Date(iso).getTime();
		if (Number.isNaN(then)) return fallback ?? '';

		const diffMs = then - now;
		const diffSeconds = Math.round(diffMs / 1000);

		const formatter = new Intl.RelativeTimeFormat('pl', { numeric: 'auto' });

		const divisions: [number, Intl.RelativeTimeFormatUnit][] = [
			[60, 'second'],
			[60, 'minute'],
			[24, 'hour'],
			[7, 'day'],
			[4.34524, 'week'],
			[12, 'month'],
			[Number.POSITIVE_INFINITY, 'year']
		];

		let duration = diffSeconds;
		for (const [amount, unit] of divisions) {
			if (Math.abs(duration) < amount) {
				return formatter.format(Math.round(duration), unit);
			}
			duration /= amount;
		}
		return fallback ?? '';
	}
</script>

{#if visibleItems.length === 0}
	<p class="rounded-2xl border border-white/5 bg-white/5 p-6 text-sm text-text-muted/80">
		{emptyMessage}
	</p>
{:else}
	<div class="grid gap-4 md:grid-cols-2">
		{#each visibleItems as item (item.id ?? item.repo + item.action + (item.created_at ?? ''))}
			<article
				class="relative overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-5 transition duration-300 hover:-translate-y-1 hover:border-emerald/40 hover:bg-white/10"
				transition:fade
			>
				<div class="absolute inset-0 opacity-0 transition duration-300 hover:opacity-100">
					<div class="absolute inset-0 bg-gradient-to-br from-hyper/10 via-transparent to-emerald/15"></div>
				</div>
				<div class="relative z-10 space-y-2">
					<p class="text-xs uppercase tracking-[0.3em] text-text-muted">
						{formatRelative(item.created_at, item.timeAgo)}
					</p>
					<h3 class="text-lg font-semibold text-white">{item.repo}</h3>
					{#if item.href}
						<a
							class="inline-flex items-center gap-2 text-sm font-medium text-emerald transition hover:gap-3"
							href={item.href}
						>
							{item.action}
							<span aria-hidden="true">↗</span>
						</a>
					{:else}
						<p class="text-sm text-emerald/80">{item.action}</p>
					{/if}
					{#if item.description}
						<p class="text-sm text-text-muted/90">{item.description}</p>
					{/if}
				</div>
			</article>
		{/each}
	</div>

	{#if limitedItems.length > Math.min(initialVisible, maxItems)}
		<div class="mt-6 text-center">
			<button
				class="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2 text-xs uppercase tracking-[0.25em] text-text-muted transition hover:-translate-y-0.5 hover:border-emerald/40 hover:text-white"
				onclick={() => (expanded = !expanded)}
			>
				{expanded ? 'Pokaż mniej' : `Pokaż wszystkie (${limitedItems.length})`}
			</button>
		</div>
	{/if}
{/if}
