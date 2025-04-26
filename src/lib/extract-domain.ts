export function extractDomain(url: string): string | null {
	const urlPattern = /^(?:https?:\/\/)?(?:www\.)?([^\/]+)/i;
	const match = url.match(urlPattern);
	return match ? match[1] : null;
}
