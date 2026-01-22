import Prismic from '@prismicio/client';

const API_URL = process.env.NEXT_PUBLIC_PRISMIC_ENDPOINT;
const API_TOKEN = process.env.NEXT_PUBLIC_PRISMIC_ACCESS_TOKEN;

// Basic sanity check to avoid hitting Prismic with an invalid/undefined URL.
const isAbsoluteUrl = (url?: string | null): url is string => {
	if (!url) return false;
	try {
		const parsed = new URL(url);
		return parsed.protocol === 'http:' || parsed.protocol === 'https:';
	} catch (error) {
		return false;
	}
};

export const hasPrismicConfig = isAbsoluteUrl(API_URL);

export const client = hasPrismicConfig
	? Prismic.client(API_URL, { accessToken: API_TOKEN ?? undefined })
	: null;

export { API_URL, API_TOKEN };
