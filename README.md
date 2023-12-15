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

# Quiz Implementation with Next.js and TypeScript

## Introduction

I've been considering various approaches. I explored and the final choices made for implementation.

## Considered Approaches

1. **Context API + Lazy Loading:**
   - Utilize React Context API for state management.
   - Implement lazy loading for rendering components step by step.
   - **Pros:** Centralized state management.
   - **Cons:** Increased complexity; may not scale well.

2. **Dynamic Route with Next.js + PPR (Partial Page Rendering):**
   - Use dynamic routes in Next.js for each quiz step.
   - Implement PPR for rendering only the necessary components.
   - **Pros:** Simplicity in routing.
   - **Cons:** PPR limitations; potential performance issues, hydration not-stable.

3. **Local Storage + React Hook Form + Zod Validation:**
   - Leverage local storage for persisting user answers.
   - Use React Hook Form for form management and validation.
   - Integrate Zod for schema-based validation.
   - Implement server actions, optimistic updates, and PPR for an ideal user experience.
   - **Pros:** Robust form management and validation; ideal scenario.
   - **Cons:** Time-consuming; requires extensive implementation.

## Chosen Solution

**Local Storage + Dynamic Import + SSG (Static Site Generation) for Slug Quiz + Tailwind + UI Components from [ui.shadcn.com](https://ui.shadcn.com/):**
   - Utilize local storage for persisting user answers across steps.
   - Scalable in case we would like to keep progress between tabs.
   - Implement dynamic imports for lazy loading individual quiz steps.
   - Use SSG for generating static pages based on quiz slugs.
   - Employ Tailwind for a simple and responsive UI.
   - Integrate UI components from [ui.shadcn.com](https://ui.shadcn.com/) for design consistency.
   - **Pros:** Efficient state management; optimal performance; clean and responsive UI.
   - **Cons:** Limited dynamic updates between steps.

## Code Organization and Improvements

During the development process, there was a focus on improving code organization and unifying helper methods. Some aspects, such as centralizing state management and refining helper functions, were not fully realized due to time constraints during the 4-5 hour development session.

## Conclusion

The chosen approach combines the benefits of local storage for state persistence, dynamic imports for lazy loading, SSG for optimal performance, and Tailwind for a clean UI. While some improvements could be made in code organization and structure, the final implementation provides a solid foundation for a quiz wizard in a NextJS

## Deployed on Vercel
<https://promova-quiz.vercel.app/>
