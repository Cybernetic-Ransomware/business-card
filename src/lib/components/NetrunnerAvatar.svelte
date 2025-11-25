<script lang="ts">
	type Direction = { x: number; y: number };

	const asciiFigure = [
		"           _________           ",
		"        .-':::::::::'-.        ",
		"      .'  :::::::::::  '.      ",
		"     /   :::::::::::::   \\     ",
		"    ;   :::::::::::::::   ;    ",
		"    |  :::::::::::::::::  |    ",
		"    |  ::: ___  ::: ___ :: |   ",
	"    |  :::     :::      :: |   ",
		"    |  :::  -   :::   - :::|   ",
		"    |  :::::::::::::::::  |    ",
		"    ;   :::::::::::::::   ;    ",
		"     \\   '::::::::::::'  /     ",
		"      '.   :::::::::   .'      ",
		"        '-. _______ .-'        ",
		"           '-------'           "
	].join('\n');

	const eyes = [
		{ col: 12, row: 7 },
		{ col: 20, row: 7 }
	];

	let {
		direction = { x: 0, y: 0 },
		active = false
	}: { direction?: Direction; active?: boolean } = $props();

	const clamp = (value: number, min: number, max: number) =>
		Math.max(min, Math.min(max, value));

	const eyeOffset = $derived({
		x: clamp(direction.x, -1, 1) * 0.85,
		y: clamp(direction.y, -1, 1) * 0.5
	} satisfies Direction);

	const intensity = $derived(clamp(Math.hypot(direction.x, direction.y), 0, 1));
	const tone = $derived(0.6 + clamp(intensity * 0.35, 0, 0.35));
	const glowOpacity = $derived(0.35 + intensity * 0.45 + (active ? 0.12 : 0));
</script>

<div
	class="ascii-shell"
	class:is-active={active}
	style={`--tone:${tone}; --intensity:${intensity};`}
>
	<div class="ascii-glow" style={`opacity: ${glowOpacity};`}></div>
	<pre class="ascii-figure">{asciiFigure}</pre>
	{#each eyes as eye}
		<span
			class="eye"
			style={`--col:${eye.col}; --row:${eye.row}; --offset-x:${eyeOffset.x}ch; --offset-y:${eyeOffset.y}em;`}
		>
			[]
		</span>
	{/each}
	<div class="ascii-overlay" aria-hidden="true"></div>
</div>

<style>
	.ascii-shell {
		position: relative;
		width: clamp(12rem, 34vw, 18rem);
		aspect-ratio: 3 / 4;
		padding: 1.75rem 1.6rem;
		border-radius: 2rem;
		background:
			radial-gradient(circle at 25% 20%, rgba(0, 255, 159, 0.22), transparent 65%),
			radial-gradient(circle at 80% 70%, rgba(26, 140, 255, 0.18), transparent 70%),
			linear-gradient(160deg, rgba(5, 10, 20, 0.92), rgba(6, 12, 24, 0.88));
		border: 1px solid rgba(255, 255, 255, 0.08);
		box-shadow: 0 26px 70px rgba(4, 10, 20, 0.55), inset 0 0 0 1px rgba(0, 255, 159, 0.04);
		overflow: hidden;
		font-family: 'IBM Plex Mono', ui-monospace, SFMono-Regular, monospace;
		transition: transform 220ms ease;
	}

	.ascii-shell.is-active {
		transform: translateY(-4px) scale(1.01);
	}

	.ascii-glow {
		position: absolute;
		inset: -18% -22%;
		border-radius: inherit;
		background:
			radial-gradient(circle at 35% 30%, rgba(0, 255, 159, 0.4), transparent 65%),
			radial-gradient(circle at 70% 65%, rgba(26, 140, 255, 0.32), transparent 75%);
		filter: blur(38px);
		pointer-events: none;
		transition: opacity 200ms ease;
	}

	.ascii-figure {
		position: relative;
		z-index: 1;
		margin: 0;
		white-space: pre;
		font-size: 0.92rem;
		line-height: 1.1em;
		letter-spacing: 0.08em;
		color: rgba(190, 236, 255, var(--tone));
		text-shadow: 0 0 8px rgba(0, 255, 159, 0.2), 0 0 14px rgba(26, 140, 255, 0.2);
	}

	.ascii-shell.is-active .ascii-figure {
		text-shadow: 0 0 12px rgba(0, 255, 159, 0.32), 0 0 24px rgba(26, 140, 255, 0.26);
	}

	.eye {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 2;
		font-size: 0.95rem;
		font-weight: 600;
		color: #9ef5ff;
		text-shadow: 0 0 10px rgba(0, 255, 159, 0.75), 0 0 18px rgba(26, 140, 255, 0.45);
		transform: translate(
			calc(var(--col) * 0.62em + var(--offset-x)),
			calc(var(--row) * 1.08em + var(--offset-y))
		);
		transition: transform 140ms ease-out, color 240ms ease;
		pointer-events: none;
	}

	.ascii-shell.is-active .eye {
		color: #d3ffff;
	}

	.ascii-overlay {
		position: absolute;
		inset: 0;
		border-radius: inherit;
		pointer-events: none;
		overflow: hidden;
		mix-blend-mode: screen;
		opacity: calc(0.2 + var(--intensity) * 0.25);
		transition: opacity 240ms ease;
	}

	.ascii-overlay::before,
	.ascii-overlay::after {
		content: "::=+=::/\\|::=+=::/\\|\A/\\|::=+=::/\\|::=+\A::/\\|::=+=::/\\|::=";
		position: absolute;
		top: -20%;
		left: -5%;
		width: 140%;
		height: 160%;
		white-space: pre;
		font-size: 0.78rem;
		line-height: 1.05em;
		letter-spacing: 0.18em;
		color: rgba(0, 255, 159, 0.28);
		opacity: 0.36;
		text-shadow: 0 0 6px rgba(0, 255, 159, 0.3);
		transform: translate3d(0, 0, 0);
	}

	.ascii-overlay::after {
		top: auto;
		bottom: -25%;
		left: -10%;
		color: rgba(26, 140, 255, 0.24);
		opacity: 0.3;
		filter: blur(0.4px);
	}

	.ascii-shell.is-active .ascii-overlay::before {
		animation: asciiDrift 2.6s linear infinite;
	}

	.ascii-shell.is-active .ascii-overlay::after {
		animation: asciiDriftReverse 3.2s linear infinite;
	}

	@keyframes asciiDrift {
		0% {
			transform: translate3d(0, 0, 0);
		}
		100% {
			transform: translate3d(0, -18%, 0);
		}
	}

	@keyframes asciiDriftReverse {
		0% {
			transform: translate3d(0, 0, 0);
		}
		100% {
			transform: translate3d(0, 16%, 0);
		}
	}
</style>
