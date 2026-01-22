import Prismic from '@prismicio/client';

import { client, hasPrismicConfig } from 'utils/prismic/client';
import { mockLayout } from 'utils/prismic/mockData';

export interface Layout {
  readmore: string;
}

const queryLayout = async () =>
  client?.query(Prismic.Predicates.at('document.type', 'layout'));

export const getLayout = async (): Promise<Layout> => {
  if (!hasPrismicConfig || !client) return mockLayout;

  try {
    const queriedLayout = await queryLayout();
    const layout = queriedLayout?.results?.[0]?.data as Layout | undefined;

    return layout ?? mockLayout;
  } catch (error) {
    console.warn('Falling back to mock layout because Prismic fetch failed.', error);
    return mockLayout;
  }
};
