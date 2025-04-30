export function extractDomain(url: string): string | null {
	if (!url) {
		return null;
	}

	const urlPattern = /^(?:https?:\/\/)?(?:www\.)?([^\/]+)/i;
	const match = url.match(urlPattern);
	return match ? match[1] : null;
}
