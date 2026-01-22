import Prismic from '@prismicio/client';

import { client, hasPrismicConfig } from 'utils/prismic/client';
import { mockSeoHead } from 'utils/prismic/mockData';
import { HeadProps } from 'seo/Head/Head';

const queryPage = async (name: string) =>
  client?.query(Prismic.Predicates.at('document.type', name));

export const getSeoHead = async (name: string): Promise<HeadProps> => {
  if (!hasPrismicConfig || !client) return mockSeoHead(name);

  try {
    const page = await queryPage(name);
    const body = page?.results?.[0]?.data?.body?.[0]?.primary;

    const head: HeadProps | undefined = body
      ? {
          description: body.description,
          ogImageSrc: body.image?.url,
          ogType: body.type,
          title: body.title,
        }
      : undefined;

    return head ?? mockSeoHead(name);
  } catch (error) {
    console.warn('Falling back to mock SEO head because Prismic fetch failed.', error);
    return mockSeoHead(name);
  }
};
