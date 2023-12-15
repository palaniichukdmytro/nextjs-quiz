## Getting Started

Install all dependencies

```bash
npm install
# node might be latest stable 

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Overall vision

There are a couple approach how to implement wizard with persist state, I was considering such options

- context api + lazy loading as one component with steps
- dynamic route with next js + PPR (does not work well )
- local storage + react hook form + zod validation + server action + optimistic update + PPR and skeleton ( Ideal scenario but had lack of time )

 End up with local storage and dynamic import  + SSG for slug quiz + tailwind + <https://ui.shadcn.com/> UI components

As well I saw some improvements in code organization and unifying some helpers and methods that was not possible during 4-5 hours session. 

## Deployed on Vercel
<https://promova-quiz.vercel.app/>
