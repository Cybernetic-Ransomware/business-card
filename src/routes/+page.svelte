<script lang="ts">
	import {
		ActivityFeed,
		ContactPanel,
		HeroPanel,
		NeonDivider,
		ProjectCard,
		SectionHeader,
		TechCard,
		TimelineItem,
		ToolboxCloud
	} from '$lib';

	const { data } = $props();

	const navItems = [
		{ label: 'Hero', href: '#hero' },
		{ label: 'Tech DNA', href: '#tech' },
		{ label: 'Experience', href: '#experience' },
		{ label: 'Projects', href: '#projects' },
		{ label: 'Toolbox', href: '#toolbox' },
		{ label: 'Pulse', href: '#pulse' },
		{ label: 'Contact', href: '#contact' }
	];

const hero = {
	name: 'Aleksander Marszałkiewicz',
	role: 'Python Developer · Backend & MLOps',
	tagline:
		'Łączę backend w Pythonie z automatyzacją DevOps i wdrażaniem modeli VLM dla zespołów CGI oraz systemów ERP.',
	ctas: [
		{ label: 'GitHub', href: 'https://github.com/Cybernetic-Ransomware' },
		{
			label: 'LinkedIn',
			href: 'https://www.linkedin.com/in/aleksander-marsza%C5%82kiewicz-b826959a',
			variant: 'ghost'
		},
		{
			label: 'Pobierz CV',
			href: '/cv/Aleksander_Marszalkiewicz_CV.pdf',
			variant: 'ghost',
			target: '_blank',
			rel: 'noopener noreferrer'
		},
		{
			label: 'Napisz maila',
			href: 'mailto:aleksander.marszalkiewicz@protonmail.com',
			variant: 'ghost'
		}
	]
};

const techStack = [
	{
		title: 'Python Frameworks',
		category: 'Backend',
		description: 'FastAPI, Django/DRF i Flask dla integracji JIRA, Ftrack oraz narzędzi CGI.',
		highlight: 'Buduję rozszerzenia i webhooki spinające produkcję filmową z systemami assetów.'
	},
	{
		title: 'Event & Task Orchestration',
		category: 'Automation',
		description:
			'Celery, RabbitMQ, Kafka oraz n8n obsługujące pipeline’y renderingu, rozliczeń i integracji z MinIO/S3.',
		highlight:
			'Monitoruję worker’y Celery w Grafanie/Sentry, pilnując SLA synchronizacji assetów i billingów.'
	},
	{
		title: 'Data & Analytics',
		category: 'Data',
		description: 'Polars, Pandas, TimescaleDB, PostgreSQL i CouchDB dla raportów oraz dashboardów ERP.',
		highlight: 'Projektuję hurtownie danych i raporty SQL dla WMS oraz CRM.'
	},
	{
		title: 'Cloud & Containers',
		category: 'Platform',
		description:
			'Docker Desktop, QNAP Container Station, Compose, AWS i Minikube do wdrożeń on-prem oraz hybrydowych.',
		highlight: 'Standaryzuję kontenery (Helix Core, API FastAPI, usługi ML) w pipeline’ach CI/CD.'
	},
	{
		title: 'Quality & Tooling',
		category: 'QA',
		description:
			'Pytest, Playwright, Selenium, Ruff, Postman oraz UV/Poetry dla jakości kodu i automatycznych testów.',
		highlight: 'Regresje HTTP + ADR i monitorowanie błędów w Sentry spinają release’y BPOE i integracji.'
	},
	{
		title: 'Vision-Language ML',
		category: 'AI',
		description:
			'PyTorch, LangChain, LangSmith, Hugging Face, ComfyUI, Flux i Stable Diffusion w procesach VLM.',
		highlight:
			'Łączę LangChain z API Gemini i Perplexity, tworząc agenty QC i generatywne dla assetów.'
	}
];

const experience = [
	{
		title: 'Junior Software Developer',
		period: '2024 — obecnie',
		organization: 'GPD Agency & Film Studio',
		description:
			'Integruję backendy platform produkcyjnych (JIRA, Ftrack, Brandfolder) z pipeline’ami CGI i tworzę rozszerzenia pod potrzeby zespołów artystycznych.',
		metrics: [
			'Orkiestracja usług Celery/FastAPI monitorowanych w Grafanie i Prometheusie',
			'Wdrożenie Helix Core oraz narzędzi VLM usprawniło zarządzanie assetami Unreal Engine'
		]
	},
	{
		title: 'Backend Trainee (Mentoring)',
		period: '2023 — obecnie',
		organization: 'Devs Mentoring',
		description:
			'Rozwijam projekty backendowe pod okiem seniora: architektura mikroserwisów, ADR oraz testy end-to-end w Django i FastAPI.',
		metrics: [
			'Zbudowane aplikacje Animals Healthcare i Be Part of Events z CI/CD oraz monitoringiem',
			'Ćwiczone praktyki DevOps (Docker, Kubernetes, GitFlow) na projektach open source'
		]
	},
	{
		title: 'ERP Administrator',
		period: '2023 — 2024',
		organization: 'Centrum Usług Wspólnych Chata Polska',
		description:
			'Utrzymywałem hurtownie danych oraz systemy ERP/WMS/CRM w trakcie migracji platformy, automatyzując raportowanie SQL.',
		metrics: [
			'Triage i naprawa błędów synchronizacji między ERP a magazynem danych',
			'Budowa i utrzymanie raportów analitycznych dla biznesu na bazie MS SQL'
		]
	}
];

const projects = [
	{
		title: 'AI Agent for Creative Asset Validation',
		status: 'Prototype',
		description:
			'Streamlitowy agent QA dla materiałów marketingowych: OCR, porównywanie obrazów, research w oparciu o OpenAI/Gemini/Groq i śledzenie w LangSmith.',
		stack: ['Streamlit', 'LangSmith', 'OpenAI/Gemini', 'Groq'],
		href: 'https://github.com/Cybernetic-Ransomware/AI_Agent_for_Creative_Asset_Validation'
	},
	{
		title: 'Animals Healthcare',
		status: 'Production',
		description:
			'Aplikacja medyczna dla opiekunów zwierząt: timeline, biometria, diety i powiadomienia Discord/e-mail.',
		stack: ['Django', 'Celery', 'PostgreSQL', 'Docker'],
		href: 'https://github.com/Cybernetic-Ransomware/Animals_Healthcare_Application'
	},
	{
		title: 'Be Part of Events',
		status: 'In Development',
		description:
			'Mikroserwisowe rozliczanie wydatków z OCR rachunków, kolejkami Kafka i autoryzacją Auth0.',
		stack: ['FastAPI', 'TimescaleDB', 'Kafka', 'Auth0'],
		href: 'https://github.com/Cybernetic-Ransomware/bpoe-api-gateway'
	},
	{
		title: 'BPOE API Gateway',
		status: 'In Development',
		description:
			'Centralny gateway dla mikroserwisów BPOE z obsługą Auth0, mocków Postman i automatyzacją w Poetry.',
		stack: ['FastAPI', 'Auth0', 'Docker Compose', 'Poetry'],
		href: 'https://github.com/Cybernetic-Ransomware/bpoe-api-gateway'
	},
	{
		title: 'BPOE OCR Service',
		status: 'In Development',
		description:
			'Skanowanie rachunków z Tesseract, zapisem do MongoDB i storage w MinIO dostępne wyłącznie przez gateway.',
		stack: ['FastAPI', 'Tesseract', 'MongoDB', 'MinIO'],
		href: 'https://github.com/Cybernetic-Ransomware/bpoe-ocr'
	},
	{
		title: 'BPOE Events DB Handler',
		status: 'In Development',
		description:
			'Asynchroniczna obsługa głównej bazy TimescaleDB/PostgreSQL 17 dla mikroserwisów wydarzeń.',
		stack: ['FastAPI', 'PostgreSQL 17', 'TimescaleDB', 'UV'],
		href: 'https://github.com/Cybernetic-Ransomware/bpoe-events_db_handler'
	},
	{
		title: 'BPOE Reports Service',
		status: 'In Development',
		description:
			'Mikroserwis generujący raporty z filtrowaniem i walidacją Pydantic, komunikujący się z handlerem bazy.',
		stack: ['FastAPI', 'Pydantic', 'TimescaleDB', 'Docker'],
		href: 'https://github.com/Cybernetic-Ransomware/bpoe_events_reports'
	},
	{
		title: 'Helix Core Toolchain',
		status: 'Production',
		description:
			'Konteneryzowany Helix Core z telemetrią GPU i panelami Grafany dla zespołów Unreal Engine.',
		stack: ['Docker', 'Helix Core', 'FastAPI', 'Grafana'],
		href: 'https://github.com/Cybernetic-Ransomware/helix-docker'
	},
	{
		title: 'FARM Stack Course',
		status: 'Course',
		description:
			'Notatki z kursu freeCodeCamp budującego aplikację FastAPI + React + MongoDB.',
		stack: ['FastAPI', 'React', 'MongoDB', 'Learning'],
		href: 'https://github.com/Cybernetic-Ransomware/FARM-Stack-Course'
	},
	{
		title: 'Image Processing Comparison',
		status: 'Template',
		description:
			'Dockerowy benchmark API porównujący wydajność libvips, OpenCV i Pillow w przetwarzaniu obrazów.',
		stack: ['FastAPI', 'libvips', 'OpenCV', 'Docker'],
		href: 'https://github.com/Cybernetic-Ransomware/libvips-opencv-processing'
	},
	{
		title: 'QR Generator',
		status: 'Prototype',
		description:
			'Flask + Segno do generowania kodów QR z opcją wdrożenia na Minikube.',
		stack: ['Flask', 'Segno', 'Docker', 'Minikube'],
		href: 'https://github.com/Cybernetic-Ransomware/QR_generator'
	},
	{
		title: 'Image Binary Converting Lab',
		status: 'Lab',
		description:
			'Zbiór skryptów ASCII-art, steganografii, GIF tworzenia i prostego OCR na bazie Pillow/Tesseract.',
		stack: ['Python', 'Pillow', 'Tesseract', 'OpenCV'],
		href: 'https://github.com/Cybernetic-Ransomware/Image_binary_converting'
	},
	{
		title: 'WordCloud Maker',
		status: 'Lab',
		description:
			'Skrypt regex + wordcloud tworzący grafiki na bazie maski PNG i tekstowych źródeł.',
		stack: ['Python', 'Regex', 'WordCloud', 'Pillow'],
		href: 'https://github.com/Cybernetic-Ransomware/create_WordCloud'
	},
	{
		title: 'FastAPI Template',
		status: 'Template',
		description:
			'Opiniowany szablon FastAPI z UV, Dockerem, pre-commitami i kolekcją Postman.',
		stack: ['FastAPI', 'UV', 'Docker', 'Pre-commit'],
		href: 'https://github.com/Cybernetic-Ransomware/fastapi-template'
	},
	{
		title: 'Flask Cargo Storage',
		status: 'Course',
		description:
			'Realizacja kursu CRUD z Flask + SQLAlchemy + WTForms na przykładzie magazynu ładunków.',
		stack: ['Flask', 'SQLAlchemy', 'WTForms', 'bcrypt'],
		href: 'https://github.com/Cybernetic-Ransomware/flask_CRUD_course_cargo_storage'
	},
	{
		title: 'Django Ninja CRUD Template',
		status: 'Template',
		description:
			'Dwa moduły Django Ninja z CRUD, migracjami i schematami gotowymi do rozszerzania.',
		stack: ['Django', 'Django Ninja', 'Poetry', 'SQLite'],
		href: 'https://github.com/Cybernetic-Ransomware/template_Django_Ninja_CRUD_API'
	},
	{
		title: 'GraphQL + SQLAlchemy Template',
		status: 'Template',
		description:
			'FastAPI z równoległym REST i GraphQL (Strawberry) do szybkiego prototypowania API.',
		stack: ['FastAPI', 'Strawberry', 'SQLAlchemy', 'Uvicorn'],
		href: 'https://github.com/Cybernetic-Ransomware/template_GraphQL_SQLAlchemy_FastAPI'
	},
	{
		title: 'CockroachDB API Template',
		status: 'Template',
		description:
			'Dockerowy CockroachDB ze skryptami SQLAlchemy i przykładami transakcji.',
		stack: ['CockroachDB', 'SQLAlchemy', 'Docker', 'Poetry'],
		href: 'https://github.com/Cybernetic-Ransomware/template_cockroachdb_python_api'
	},
	{
		title: 'gRPC JSON Template',
		status: 'Template',
		description:
			'Podstawowy serwer/klient gRPC do wysyłania tekstów i plików JSON z generacją protbufów.',
		stack: ['Python', 'gRPC', 'Protobuf', 'CLI'],
		href: 'https://github.com/Cybernetic-Ransomware/template_gRPC_JSON'
	},
	{
		title: 'Kafka Docker Template',
		status: 'Template',
		description:
			'Konteneryzowany broker Kafka z przykładowym producentem i konsumentem w Pythonie.',
		stack: ['Docker', 'Kafka', 'Python', 'Compose'],
		href: 'https://github.com/Cybernetic-Ransomware/template_mala_kafka'
	},
	{
		title: 'Streamlit Jira Search',
		status: 'Template',
		description:
			'Szybki interfejs Streamlit do wykonywania ograniczonych zapytań JQL na serwerze Jira.',
		stack: ['Streamlit', 'Jira API', 'UV', 'Docker'],
		href: 'https://github.com/Cybernetic-Ransomware/template_streamlit_jira'
	},
	{
		title: 'Tesseract OCR Template',
		status: 'Template',
		description:
			'Dockerowy kontener z polskim pakietem Tesseract i skryptami PowerShell do batchowego OCR.',
		stack: ['Tesseract', 'Docker', 'PowerShell', 'Python'],
		href: 'https://github.com/Cybernetic-Ransomware/template_tesserac_ocr_python_api'
	}
];

const backlogProjects = [
	{
		title: '_template_django_svelte',
		href: 'https://github.com/Cybernetic-Ransomware/_template_django_svelte'
	},
	{
		title: 'brandfolder_downloader',
		href: 'https://github.com/Cybernetic-Ransomware/brandfolder_downloader'
	},
	{
		title: 'Streamlite-UI-for_local-VLMs',
		href: 'https://github.com/Cybernetic-Ransomware/Streamlite-UI-for_local-VLMs'
	},
	{
		title: 'authzerofastapi',
		href: 'https://github.com/Cybernetic-Ransomware/authzerofastapi'
	},
	{
		title: 'flaskJIRAwebhooktriggered',
		href: 'https://github.com/Cybernetic-Ransomware/flaskJIRAwebhooktriggered'
	},
	{
		title: 'GeminiOCR',
		href: 'https://github.com/Cybernetic-Ransomware/GeminiOCR'
	},
	{
		title: 'ftrackapi',
		href: 'https://github.com/Cybernetic-Ransomware/ftrackapi'
	},
	{
		title: 'GPT_batches_api',
		href: 'https://github.com/Cybernetic-Ransomware/GPT_batches_api'
	},
	{
		title: 'dockerized_onetrainer',
		href: 'https://github.com/Cybernetic-Ransomware/dockerized_onetrainer'
	},
	{
		title: '_template_material_for_MkDocs',
		href: 'https://github.com/Cybernetic-Ransomware/_template_material_for_MkDocs'
	},
	{
		title: 'comfy_config_backup',
		href: 'https://github.com/Cybernetic-Ransomware/comfy_config_backup'
	}
];

const toolboxTags = [
	{
		label: 'Celery · RabbitMQ',
		category: 'Automation',
		description: 'Kolejkowanie renderów i tasków integracyjnych dla CGI, ERP oraz workflowów n8n.'
	},
	{
		label: 'LangChain · LangSmith',
		category: 'AI Ops',
		description: 'Buduję agentów VLM z tracingiem, benchmarkingiem i QA modeli (Gemini, Perplexity).'
	},
	{
		label: 'Grafana · Prometheus · Sentry',
		category: 'Observability',
		description: 'Telemetry GPU, alerting workerów Celery oraz monitoring błędów backendów FastAPI.'
	},
	{
		label: 'Pytest · Playwright',
		category: 'Testing',
		description: 'Testy jednostkowe, kontraktowe i E2E + coverage integrujące się z CI UV/Poetry.'
	},
	{
		label: 'Postman Collections',
		category: 'Collaboration',
		description: 'Mocki i scenariusze API dla gateway’a BPOE, synchronizowane z ADR i repozytoriami.'
	},
	{
		label: 'Docker Desktop · Container Station',
		category: 'Platform',
		description: 'Środowiska lokalne i edge (QNAP) dla kontenerów Helix Core, FastAPI i usług ML.'
	},
	{
		label: 'Hugging Face · ComfyUI',
		category: 'AI',
		description: 'Fine-tuning modeli, orkiestracja pipeline’ów generatywnych oraz backup konfiguracji.'
	},
	{
		label: 'Helix Core Admin',
		category: 'DevOps',
		description: 'Repozytoria dla Unreal Engine z automatyzacją backupów i zarządzaniem uprawnieniami.'
	},
	{
		label: 'LLM Studio',
		category: 'AI Ops',
		description: 'Eksperymenty z trenowaniem i optymalizacją modeli LLM w środowisku on-prem.'
	}
];

const fallbackActivityFeed = [
	{
		repo: 'gpd-integrations',
		action: 'Deployed JIRA ↔ Ftrack sync service',
		description: 'FastAPI + Celery streaming metadata aktualizujące assety CGI w czasie rzeczywistym.',
		created_at: new Date('2025-04-12T10:00:00Z').toISOString()
	},
	{
		repo: 'helix-core-toolchain',
		action: 'Added GPU telemetry dashboard',
		description: 'Eksport danych z Nvidia SMI do Prometheusa i wizualizacja w Grafanie.',
		created_at: new Date('2025-03-28T14:30:00Z').toISOString()
	},
	{
		repo: 'animals-healthcare',
		action: 'Merged feature/ward-notes',
		description: 'Nowy moduł notatek z asynchronicznym wysyłaniem powiadomień Celery.',
		created_at: new Date('2025-02-18T08:45:00Z').toISOString()
	},
	{
		repo: 'bpoe-api-gateway',
		action: 'Documented ADR-012 billing-split',
		description: 'Opis architektury OCR + Kafka dla rozliczeń grupowych.',
		created_at: new Date('2025-01-30T16:15:00Z').toISOString()
	}
];

const activityFeed = (data?.activityItems?.length ? data.activityItems : fallbackActivityFeed).slice(
	0,
	10
);

const contact = {
	email: 'aleksander.marszalkiewicz@protonmail.com',
	timezone: 'Europe/Warsaw · GMT+1 / CEST',
	socials: [
		{ label: 'GitHub', href: 'https://github.com/Cybernetic-Ransomware' },
		{
			label: 'LinkedIn',
			href: 'https://www.linkedin.com/in/aleksander-marsza%C5%82kiewicz-b826959a'
		},
		{ label: 'Email alternatywny', href: 'mailto:aleksander.marszalkiewicz.pp@gmail.com' }
	]
};
</script>

<svelte:head>
	<title>Aleksander Marszałkiewicz · Python Developer</title>
</svelte:head>

<div class="relative min-h-screen">
	<div class="pointer-events-none fixed inset-0 -z-10 opacity-60 blur-3xl">
		<div class="absolute left-0 top-0 h-96 w-96 bg-[radial-gradient(circle,_rgba(0,255,159,0.25),_transparent_60%)]"></div>
		<div class="absolute right-0 top-32 h-[28rem] w-[28rem] bg-[radial-gradient(circle,_rgba(138,43,255,0.18),_transparent_60%)]"></div>
		<div class="absolute bottom-0 left-1/3 h-80 w-80 bg-[radial-gradient(circle,_rgba(26,140,255,0.2),_transparent_60%)]"></div>
	</div>

	<header class="sticky top-0 z-20 border-b border-white/5 bg-surface/80 backdrop-blur-xl">
		<div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
			<a href="#hero" class="font-mono text-xs uppercase tracking-[0.35em] text-emerald/80">
				cybernetic.dev
			</a>
			<nav class="hidden items-center gap-5 text-xs uppercase tracking-[0.3em] text-text-muted md:flex">
				{#each navItems as item}
					<a class="transition hover:text-white" href={item.href}>{item.label}</a>
				{/each}
			</nav>
			<a
				class="rounded-full border border-emerald/40 px-4 py-2 text-xs uppercase tracking-[0.3em] text-emerald transition hover:-translate-y-0.5 hover:bg-white/10"
				href="#contact"
			>
				Contact
			</a>
		</div>
	</header>

	<main class="mx-auto max-w-6xl px-6 pb-24 pt-12 md:pt-16">
		<section id="hero" class="scroll-mt-24">
			<HeroPanel {...hero} />
		</section>

		<NeonDivider label="neon signal" />

	<section id="tech" class="scroll-mt-24">
		<SectionHeader
			eyebrow="tech dna"
			title="Stack napędzający pipeline’y CGI i ERP"
			description="Technologie, na których opieram integracje produkcji filmowej, systemów korporacyjnych i eksperymenty z AI."
		/>
		<div class="grid gap-6 md:grid-cols-2">
			{#each techStack as tech}
				<TechCard {...tech} />
			{/each}
		</div>
	</section>

		<NeonDivider />

	<section id="experience" class="scroll-mt-24">
		<SectionHeader
			eyebrow="experience & impact"
			title="Doświadczenie zawodowe"
			description="Kluczowe role, w których łączę Python, DevOps oraz wiedzę domenową z produkcji i logistyki."
		/>
		<div class="space-y-8 border-l border-white/5 pl-8">
			{#each experience as item}
				<TimelineItem {...item} />
			{/each}
		</div>
	</section>

		<NeonDivider />

	<section id="projects" class="scroll-mt-24">
		<SectionHeader
			eyebrow="featured projects"
			title="Produkcyjne wdrożenia i prototypy"
			description="Projekty, które rozwijam w ramach mentoringu i pracy – od rozliczeń grupowych po narzędzia dla artystów CGI."
		/>
		<div class="grid gap-6 md:grid-cols-3">
			{#each projects as project}
				<ProjectCard {...project} />
			{/each}
		</div>

		{#if backlogProjects.length}
			<div class="mt-10 rounded-3xl border border-white/5 bg-white/5 p-6">
				<p class="font-mono text-[0.7rem] uppercase tracking-[0.32em] text-text-muted/60">
					Backlog · repozytoria w trakcie porządkowania
				</p>
				<div class="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{#each backlogProjects as project}
						<a
							href={project.href}
							class="group block rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:-translate-y-0.5 hover:border-emerald/40 hover:bg-white/10"
						>
							<p class="text-xs font-semibold uppercase tracking-[0.28em] text-text-muted/80">
								{project.title}
							</p>
							<p class="mt-2 text-[0.72rem] text-text-muted/70">
								Repozytorium w trakcie porządkowania dokumentacji i kodu.
							</p>
						</a>
					{/each}
				</div>
			</div>
		{/if}
	</section>

		<NeonDivider />

	<section id="toolbox" class="scroll-mt-24">
		<SectionHeader
			eyebrow="toolbox"
			title="Operacyjny ekosystem narzędzi"
			description="Metody i narzędzia, które pomagają mi dowozić stabilne integracje i automatyzacje."
		/>
		<ToolboxCloud tags={toolboxTags} />
	</section>

		<NeonDivider />

		<section id="pulse" class="scroll-mt-24">
			<SectionHeader
				eyebrow="open source pulse"
				title="Aktywność i kontrybucje"
				description="Aktualne inicjatywy – od automatyzacji pipeline’ów po dokumentowanie decyzji architektonicznych."
			/>
			<ActivityFeed items={activityFeed} initialVisible={5} maxItems={10} />
		</section>

		<NeonDivider />

	<section id="contact" class="scroll-mt-24">
		<SectionHeader
			eyebrow="contact"
			title="Złapmy synchro"
			description="Porozmawiajmy o integracjach, automatyzacji procesów lub wdrożeniu modeli VLM w Twoim zespole."
		/>
		<ContactPanel {...contact} />
	</section>

	<footer class="mt-20 flex flex-col items-center gap-2 text-xs text-text-muted/80">
		<p>© {new Date().getFullYear()} Aleksander Marszałkiewicz. All rights reserved.</p>
		<p>Made with SvelteKit · Neon Cyberpunk Edition</p>
	</footer>
	</main>
</div>
