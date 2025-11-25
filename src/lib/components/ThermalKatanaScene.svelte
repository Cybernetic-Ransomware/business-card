<script lang="ts">
	import { onMount } from 'svelte';

	let sceneRef: HTMLDivElement;
	let bambooRef: HTMLDivElement;
	let slashRef: HTMLDivElement;

	let hudMessage = 'SYSTEM: READY [MOVE FAST]';
	let hudAlert = false;
	let isCut = false;

	let lastX: number | null = null;
	let lastY: number | null = null;
	let lastTime = 0;

	function performCut(clientX: number, clientY: number, angle: number, speed: number) {
		if (!sceneRef || !bambooRef || !slashRef) return;

		isCut = true;
		hudMessage = 'TARGET ELIMINATED';
		hudAlert = true;

		const sceneRect = sceneRef.getBoundingClientRect();
		const relativeX = clientX - sceneRect.left;
		const relativeY = clientY - sceneRect.top;

		const angleDeg = (angle * 180) / Math.PI;

		slashRef.style.setProperty('--slash-angle', `${angleDeg}deg`);
		slashRef.style.left = `${relativeX}px`;
		slashRef.style.top = `${relativeY}px`;
		slashRef.classList.remove('slash-anim');
		void slashRef.offsetWidth;
		slashRef.classList.add('slash-anim');

		const force = Math.min(speed * 12, 600);
		const flyX = Math.cos(angle) * force;
		const flyY = Math.sin(angle) * force;
		const direction = Math.cos(angle) >= 0 ? 1 : -1;
		const rotateDir = direction * (60 + Math.random() * 60);

		bambooRef.style.setProperty('--fly-x', `${flyX}px`);
		bambooRef.style.setProperty('--fly-y', `${flyY}px`);
		bambooRef.style.setProperty('--rotate-dir', `${rotateDir}deg`);
		bambooRef.style.setProperty('--cut-angle', `${angleDeg}deg`);
	}

	function resetBamboo() {
		if (!bambooRef) return;

		isCut = false;
		hudMessage = 'SYSTEM: READY [MOVE FAST]';
		hudAlert = false;

		bambooRef.style.removeProperty('--fly-x');
		bambooRef.style.removeProperty('--fly-y');
		bambooRef.style.removeProperty('--rotate-dir');
		bambooRef.style.removeProperty('--cut-angle');

		void bambooRef.offsetWidth;
	}

	onMount(() => {
		const handleMove = (e: MouseEvent) => {
			if (!bambooRef) return;

			if (lastX === null) {
				lastX = e.clientX;
				lastY = e.clientY;
				return;
			}

			if (isCut) return;

			const now = Date.now();
			const dt = now - lastTime;
			if (dt < 10) return;

			const dx = e.clientX - lastX;
			const dy = e.clientY - lastY;
			const speed = Math.hypot(dx, dy);
			const rect = bambooRef.getBoundingClientRect();

			if (
				e.clientX > rect.left &&
				e.clientX < rect.right &&
				e.clientY > rect.top &&
				e.clientY < rect.bottom &&
				speed > 25
			) {
				const angle = Math.atan2(dy, dx);
				performCut(e.clientX, e.clientY, angle, speed);
			}

			lastX = e.clientX;
			lastY = e.clientY;
			lastTime = now;
		};

		document.addEventListener('mousemove', handleMove);

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (!entry.isIntersecting && isCut) {
						resetBamboo();
					}
				}
			},
			{ threshold: 0.25 }
		);

		if (sceneRef) {
			observer.observe(sceneRef);
		}

		return () => {
			document.removeEventListener('mousemove', handleMove);
			observer.disconnect();
		};
	});
</script>

<div class="interactive-slot">
		<div class="katana-scene" bind:this={sceneRef}>
			<div class="weapon-slot">
				<img src="/katana_9218144.png" alt="Thermal katana icon" class="weapon-icon" />
			</div>
			<div class:active-cut={isCut} class="bamboo-wrapper" bind:this={bambooRef}>
				<div class="bamboo-segment top-part">
					<div class="molten-core"></div>
				</div>
				<div class="bamboo-segment bottom-part">
					<div class="molten-core"></div>
				</div>
			</div>

		<div class="slash-trail" bind:this={slashRef}></div>
		<div class:alert={hudAlert} class="hud">{hudMessage}</div>
		<div class="ground-ring"></div>
	</div>
</div>

<style>
	.interactive-slot {
		width: 100%;
		display: flex;
		justify-content: center;
	}

	.katana-scene {
		position: relative;
		width: min(360px, 100%);
		height: 420px;
		border-radius: 1.5rem;
		border: 1px solid rgba(255, 255, 255, 0.08);
		background-color: #050505;
		overflow: hidden;
		cursor: crosshair;
		box-shadow:
			inset 0 0 45px rgba(0, 0, 0, 0.7),
			0 20px 60px rgba(0, 0, 0, 0.45);
	}

	.katana-scene::before {
		content: '';
		position: absolute;
		width: 200%;
		height: 200%;
		background-image:
			linear-gradient(rgba(0, 255, 100, 0.03) 1px, transparent 1px),
			linear-gradient(90deg, rgba(0, 255, 100, 0.03) 1px, transparent 1px);
		background-size: 40px 40px;
		transform: perspective(500px) rotateX(60deg) translateY(-120px) translateZ(-200px);
		pointer-events: none;
	}

	.bamboo-wrapper {
		position: absolute;
		top: 8%;
		left: 50%;
		transform: translateX(-50%);
		width: 52px;
		height: 320px;
		display: flex;
		flex-direction: column;
		--fly-x: 100px;
		--fly-y: -50px;
		--rotate-dir: 45deg;
		--cut-angle: 0deg;
		z-index: 2;
	}

	.bamboo-wrapper::after {
		content: '';
		position: absolute;
		left: 8%;
		right: 8%;
		top: calc(50% - 12px);
		height: 24px;
		background: linear-gradient(90deg, rgba(0, 0, 0, 0.6), rgba(34, 80, 42, 0.8), rgba(0, 0, 0, 0.6));
		border-radius: 10px;
		box-shadow:
			0 0 20px rgba(0, 0, 0, 0.6),
			inset 0 0 15px rgba(0, 0, 0, 0.6);
		z-index: 3;
		pointer-events: none;
	}

	.bamboo-wrapper.active-cut .top-part {
		animation: flyOff 0.8s forwards cubic-bezier(0.25, 0.46, 0.45, 0.94);
	}

	.bamboo-segment {
		position: relative;
		width: 100%;
		flex: 1;
		background: linear-gradient(180deg, #194819 0%, #2a5f20 60%, #143516 100%);
		border-left: 2px solid #0e1f0e;
		border-right: 2px solid #0e1f0e;
		box-shadow:
			inset 7px 0 12px rgba(0, 0, 0, 0.55),
			inset -6px 0 8px rgba(255, 255, 255, 0.08),
			0 6px 12px rgba(0, 0, 0, 0.55);
		background-image: repeating-linear-gradient(
				0deg,
				transparent,
				transparent 50px,
				rgba(0, 0, 0, 0.35) 50px,
				rgba(0, 0, 0, 0.35) 53px
			),
			linear-gradient(90deg, rgba(255, 255, 255, 0.05), transparent 35%, rgba(0, 0, 0, 0.35) 80%);
	}

	.bamboo-segment::after {
		content: '';
		position: absolute;
		inset: 0;
		background:
			linear-gradient(90deg, rgba(255, 255, 255, 0.08), transparent 40%, rgba(0, 0, 0, 0.35) 90%),
			repeating-linear-gradient(
				0deg,
				transparent 0 45px,
				rgba(0, 0, 0, 0.45) 45px 47px
			);
		mix-blend-mode: screen;
		opacity: 0.8;
		pointer-events: none;
	}

	.bamboo-segment::before {
		content: '';
		position: absolute;
		left: 15%;
		right: 15%;
		height: 2px;
		background: rgba(0, 0, 0, 0.6);
		box-shadow:
			0 18px 0 rgba(0, 0, 0, 0.6),
			0 -18px 0 rgba(0, 0, 0, 0.6);
		opacity: 0.4;
		top: 50%;
		transform: translateY(-50%);
	}

	.top-part {
		transform-origin: bottom center;
		z-index: 3;
		border-radius: 6px 6px 0 0;
		border-bottom: 1px solid rgba(0, 0, 0, 0.45);
	}

	.bottom-part {
		z-index: 2;
		border-radius: 0 0 6px 6px;
		margin-top: -1px;
		border-top: 1px solid rgba(255, 255, 255, 0.05);
	}

	.molten-core {
		position: absolute;
		left: -10%;
		width: 120%;
		height: 6px;
		background: #fff;
		box-shadow:
			0 0 10px #adff2f,
			0 0 20px #39ff14,
			0 0 40px #39ff14;
		opacity: 0;
		transition: opacity 0.1s;
		transform: rotate(var(--cut-angle));
		pointer-events: none;
	}

	.top-part .molten-core {
		bottom: -3px;
	}

	.bottom-part .molten-core {
		top: -3px;
	}

	.bamboo-wrapper.active-cut .molten-core {
		opacity: 1;
	}

	.slash-trail {
		position: absolute;
		height: 3px;
		width: 0;
		background: white;
		box-shadow:
			0 0 8px #fff,
			0 0 15px #39ff14,
			0 0 30px #39ff14;
		transform-origin: center;
		pointer-events: none;
		opacity: 0;
		border-radius: 50%;
		z-index: 5;
	}

	.slash-anim {
		animation: slashFlash 0.25s ease-out forwards;
	}

	.hud {
		position: absolute;
		bottom: 30px;
		left: 50%;
		transform: translateX(-50%);
		color: rgba(255, 255, 255, 0.45);
		font-size: 0.7rem;
		letter-spacing: 0.4em;
		font-family: var(--font-mono, 'Courier New', monospace);
		text-transform: uppercase;
		pointer-events: none;
		text-align: center;
	}

	.hud.alert {
		color: #39ff14;
		text-shadow: 0 0 15px #39ff14;
	}

	.ground-ring {
		position: absolute;
		bottom: 40px;
		left: 50%;
		transform: translateX(-50%);
		width: 200px;
		height: 40px;
		background: radial-gradient(circle, rgba(57, 255, 20, 0.25), transparent 70%);
		filter: blur(8px);
		opacity: 0.8;
	}

	@keyframes flyOff {
		0% {
			transform: translate(0, 0) rotate(0deg);
			opacity: 1;
		}
		100% {
			transform: translate(var(--fly-x), var(--fly-y)) rotate(var(--rotate-dir));
			opacity: 0;
		}
	}

	@keyframes slashFlash {
		0% {
			width: 0;
			opacity: 1;
			transform: translate(-50%, -50%) rotate(var(--slash-angle)) scaleX(0.5);
		}
		50% {
			width: 600px;
			opacity: 1;
			transform: translate(-50%, -50%) rotate(var(--slash-angle)) scaleX(1);
		}
		100% {
			width: 600px;
			opacity: 0;
			transform: translate(-50%, -50%) rotate(var(--slash-angle)) scaleX(1.1);
		}
	}


	@media (max-width: 768px) {
		.katana-scene {
			height: 360px;
		}

		.bamboo-wrapper {
			height: 280px;
			width: 54px;
		}
	}

	.weapon-slot {
		position: absolute;
		top: 16px;
		left: 16px;
		padding: 10px;
		border: 1px solid rgba(0, 255, 159, 0.4);
		border-radius: 14px;
		background: rgba(0, 0, 0, 0.55);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 6;
		box-shadow:
			0 0 12px rgba(0, 255, 159, 0.25),
			inset 0 0 10px rgba(0, 0, 0, 0.65);
	}

	.weapon-icon {
		width: 28px;
		height: 28px;
		object-fit: contain;
		filter: brightness(2.4) contrast(1.4) drop-shadow(0 0 6px rgba(0, 255, 159, 0.85));
		image-rendering: auto;
	}
</style>
