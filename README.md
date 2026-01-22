## Transition

A cinematic, WebGL-driven site built with Next.js 11 + TypeScript. Custom Three.js scenes, shader-driven transitions, and layered typography create a tactile browsing experience for the index and detail pages. Content is fetched from Prismic and refreshed via ISR, with optional Google Analytics instrumentation.

### Highlights
- Immersive canvas layers for page and section transitions (2D/3D) with fine-grained timings.
- Prismic-powered content with incremental static regeneration for fast loads and fresh data.
- Responsive layout, touch-aware interactions, and font loading with graceful fallbacks.
- Production/staging host awareness plus optional Google Analytics tag injection.

### Tech Stack
- Next.js 11, React 17, TypeScript, SCSS modules
- Three.js (custom shaders and WebGL scenes), react-transition-group, tween.js
- Prismic headless CMS + ISR
- Tooling: ESLint (Next config), Prettier, cross-env

### Quick Start
1) Install dependencies
```bash
npm install
```

2) Create a `.env.local` in `frontend/`
```bash
NEXT_PUBLIC_PRISMIC_ENDPOINT=https://your-repo.cdn.prismic.io/api/v2
NEXT_PUBLIC_PRISMIC_ACCESS_TOKEN=your-token-or-remove
NEXT_PUBLIC_GA_KEY=G-XXXXXXX
NEXT_PUBLIC_FRONTEND_PROD=https://your-domain.com
NEXT_PUBLIC_FRONTEND_LOCAL=http://localhost:3000
```
- `NEXT_PUBLIC_PRISMIC_ACCESS_TOKEN` is optional for public Prismic repositories.
- `NEXT_PUBLIC_GA_KEY` is optional; omit to disable GA script injection.
- `NEXT_PUBLIC_FRONTEND_*` is used for canonical host resolution.

3) Run the app
```bash
npm run dev
```
Visit http://localhost:3000.

4) Lint
```bash
npm run lint
```

### Scripts
- `npm run dev` — start Next.js in development mode.
- `npm run build` — production build with OpenSSL legacy flag for Node compatibility.
- `npm run start` — serve the production build.
- `npm run lint` — run ESLint with the Next.js config.

### Project Map (frontend)
```text
src/
	pages/            Next.js routes (index, details/[id], error)
	containers/       Page-level data + composition
	components/       Reusable UI blocks
	classes/          Canvas + scene management (Three.js, transitions)
	styles/           SCSS base, components, and page styles
	seo/              GA + head helpers
	utils/            CMS clients, helpers, shared state
```

### Production Notes
- Uses incremental static regeneration; adjust `ISR_TIMEOUT` in [frontend/src/utils/prismic/isrTimeout.ts](frontend/src/utils/prismic/isrTimeout.ts) if needed.
- Fonts live in [frontend/public/fonts](frontend/public/fonts); keep filenames in ASCII for cross-platform builds.
- For deployment on Vercel or Node hosts, ensure env vars are set and run `npm run build` then `npm run start`.

### Troubleshooting
- Missing Prismic variables: the app will skip client instantiation; ensure `NEXT_PUBLIC_PRISMIC_ENDPOINT` is a valid URL.
- OpenSSL errors on Node 17+: the scripts already set `NODE_OPTIONS=--openssl-legacy-provider` to avoid build failures.
