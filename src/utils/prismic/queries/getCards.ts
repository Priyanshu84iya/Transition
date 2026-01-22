import Prismic from '@prismicio/client';

import { client, hasPrismicConfig } from 'utils/prismic/client';
import { mockCards } from 'utils/prismic/mockData';

export interface Card {
  uid: string;
  imageSrc: string;
  name: string;
  description: string;
}

const queryCards = async () =>
  client?.query(Prismic.Predicates.at('document.type', 'card'));

export const getCards = async (): Promise<Card[]> => {
  if (!hasPrismicConfig || !client) return mockCards;

  try {
    const queriedCards = await queryCards();
    if (!queriedCards) return mockCards;

    const cards: Card[] = queriedCards.results
      .map((el) => {
        return {
          uid: (el.uid as string) ?? '',
          description: (el.data?.description as string) ?? '',
          imageSrc: (el.data?.image?.url as string) ?? '',
          name: (el.data?.name?.[0]?.text as string) ?? '',
        };
      })
      .filter((card) => Boolean(card.uid));

    return cards.length ? cards : mockCards;
  } catch (error) {
    console.warn('Falling back to mock cards because Prismic fetch failed.', error);
    return mockCards;
  }
};
