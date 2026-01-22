import { Card } from 'utils/prismic/queries/getCards';
import { Layout } from 'utils/prismic/queries/getLayout';
import { HeadProps } from 'seo/Head/Head';

// Lightweight local fallbacks so the app can run without Prismic credentials.
export const mockCards: Card[] = [
  {
    uid: 'denji',
    name: 'Denji',
    description:
      'Denji is a downtrodden devil hunter who merges with his chainsaw devil to escape debt and hunger; he fights grotesque devils with reckless grit, learns what it means to have a normal life, and confronts loneliness, betrayal, and the cost of newfound power.',
    imageSrc: 'https://i.postimg.cc/VNq5QR0F/peakpx-(3).jpg',
  },
  {
    uid: 'asuka',
    name: 'Asuka',
    description:
      'Asuka Shikinami is a prodigy Eva pilot driven by pride and the need to prove herself; beneath her brash exterior she wrestles with isolation, perfectionism, and fragile self-worth while shouldering apocalyptic battles against the Angels.',
    imageSrc: 'https://i.postimg.cc/DzkmMD0s/peakpx-(4).jpg',
  },
  {
    uid: 'naruto',
    name: 'Naruto',
    description:
      'Naruto Uzumaki is a loud, fiercely loyal ninja shunned for the Nine-Tails within him; he turns rejection into drive, chasing the Hokage dream while mastering jutsu, defending friends, and proving that perseverance can rewrite destiny.',
    imageSrc: 'https://i.postimg.cc/5tdjRGyk/peakpx-(2).jpg',
  },
  {
    uid: 'asta',
    name: 'Asta',
    description:
      'Asta is a magicless orphan in a world ruled by mana; with raw physical grit and anti-magic swords, he challenges fate, duels towering mages, supports his squad, and pursues the Wizard King title to prove effort can rival talent.',
    imageSrc: 'https://i.postimg.cc/6QrTJ04M/peakpx.jpg',
  },
  {
    uid: 'rias',
    name: 'Rias',
    description:
      'Rias Gremory is a noble devil heiress who leads her peerage with elegance and strength; she balances regal duties with genuine compassion, fiercely protecting her team while navigating supernatural politics, alliances, and romance.',
    imageSrc: 'https://i.postimg.cc/PqsNRcJy/peakpx-(5).jpg',
  },
  {
    uid: 'isagi',
    name: 'Isagi',
    description:
      'Yoichi Isagi is a calculated striker forged in the Blue Lock program; he reads the entire pitch, evolves his ego to seize chances, and refines teamwork and spatial awareness to craft the decisive, match-ending goal.',
    imageSrc: 'https://i.postimg.cc/PqWNs4v2/peakpx-(1).jpg',
  },
];

export const mockLayout: Layout = {
  readmore: 'More Details',
};

export const mockSeoHead = (pageKey: string): HeadProps => ({
  description: `Preview content for ${pageKey}. Replace with live Prismic copy when ready.`,
  ogImageSrc: mockCards[0].imageSrc,
  ogType: 'website',
  title: `Transition — ${pageKey}`,
});