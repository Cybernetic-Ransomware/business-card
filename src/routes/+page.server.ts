import type { PageServerLoad } from './$types';
import { GITHUB_TOKEN } from '$env/static/private';

type GithubEvent = {
	id: string;
	type: string;
	created_at: string;
	repo?: { name?: string };
	payload?: Record<string, any>;
};

const USERNAME = 'Cybernetic-Ransomware';
const EVENTS_URL = `https://api.github.com/users/${USERNAME}/events/public?per_page=10`;

function mapEvent(event: GithubEvent) {
	const repo = event.repo?.name ?? USERNAME;
	const createdAt = event.created_at;
	const payload = event.payload ?? {};

	let action = event.type.replace(/Event$/, '');
	let description = '';
	let href: string | undefined;

	switch (event.type) {
		case 'PushEvent': {
			const commits = Array.isArray(payload.commits) ? payload.commits : [];
			const commitCount = commits.length;
			const latestCommit = commits.at(-1);
			action = `Pushed ${commitCount} commit${commitCount === 1 ? '' : 's'}`;
			description = latestCommit?.message ?? '';
			href = latestCommit
				? `https://github.com/${repo}/commit/${latestCommit.sha}`
				: `https://github.com/${repo}`;
			break;
		}
		case 'PullRequestEvent': {
			const pr = payload.pull_request ?? {};
			const prAction = payload.action ?? 'updated';
			action = `${prAction} PR #${pr.number ?? ''}`.trim();
			description = pr.title ?? '';
			href = pr.html_url ?? `https://github.com/${repo}/pulls`;
			break;
		}
		case 'PullRequestReviewEvent': {
			const pr = payload.pull_request ?? {};
			action = `Reviewed PR #${pr.number ?? ''}`.trim();
			description = pr.title ?? '';
			href = pr.html_url ?? `https://github.com/${repo}/pulls`;
			break;
		}
		case 'IssuesEvent': {
			const issue = payload.issue ?? {};
			const issueAction = payload.action ?? 'updated';
			action = `${issueAction} issue #${issue.number ?? ''}`.trim();
			description = issue.title ?? '';
			href = issue.html_url ?? `https://github.com/${repo}/issues`;
			break;
		}
		case 'ReleaseEvent': {
			const release = payload.release ?? {};
			action = `Published release ${release.tag_name ?? ''}`.trim();
			description = release.name ?? release.body ?? '';
			href = release.html_url ?? `https://github.com/${repo}/releases`;
			break;
		}
		case 'CreateEvent': {
			action = `Created ${payload.ref_type ?? 'ref'}`;
			description = payload.description ?? '';
			href = `https://github.com/${repo}`;
			break;
		}
		default: {
			description = payload.action ?? '';
			href = `https://github.com/${repo}`;
		}
	}

	return {
		id: event.id,
		repo,
		action,
		description,
		href,
		created_at: createdAt
	};
}

export const load: PageServerLoad = async ({ fetch }) => {
	const headers: Record<string, string> = {
		Accept: 'application/vnd.github+json'
	};

	if (GITHUB_TOKEN) {
		headers.Authorization = `Bearer ${GITHUB_TOKEN}`;
		headers['X-GitHub-Api-Version'] = '2022-11-28';
	}

	try {
		const res = await fetch(EVENTS_URL, {
			headers,
			cache: 'no-store'
		});

		if (!res.ok) {
			throw new Error(`GitHub responded with ${res.status}`);
		}

		const events = (await res.json()) as GithubEvent[];
		const items = events.map(mapEvent).slice(0, 10);

		return {
			activityItems: items
		};
	} catch (error) {
		console.error('Failed to fetch GitHub activity', error);
		return {
			activityItems: []
		};
	}
};
