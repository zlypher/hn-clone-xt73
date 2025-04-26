export function formatDate(dateString: string): string {
	const date = new Date(dateString);
	const options: Intl.DateTimeFormatOptions = { dateStyle: 'medium' };
	return date.toLocaleString(undefined, options);
}
