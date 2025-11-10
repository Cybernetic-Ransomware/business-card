<script lang="ts">
	let { label }: { label?: string } = $props();
</script>

<div class="relative my-16 flex items-center gap-6">
	<div class="h-px flex-1 rounded-full neon-divider opacity-80"></div>
	{#if label}
		<span class="font-mono text-xs uppercase tracking-[0.35em] text-text-muted">
			{label}
		</span>
		<div class="h-px flex-1 rounded-full neon-divider opacity-80"></div>
	{:else}
		<div class="h-px flex-1 rounded-full neon-divider opacity-80"></div>
	{/if}
</div>
