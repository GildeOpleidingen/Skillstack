# Skillstack

> SkillStack is an innovative learning platform that executes student code in a secure sandbox and provides immediate, targeted feedback. It combines adaptive learning paths (learning → practicing → quests) with game elements and a leaderboard to boost motivation and a sense of ownership.
> This project is powered by Gilde Opleidingen ICT College and Comenius Teaching Fellows


## Dependencies

Minimum Node.js version > 22
Minimum Postgres version > 18

## Setup

> Copy .env_example -> .env
> Install dependencies 
```bash
npm install
```
> Init the database (create database first)
```bash
npm run db:init
```

### Used by Auth

AUTH_SECRET=21c8409eb12f7c2e0d74fe8a61b8ec362d5926c40a758ef204...

### GitHub OAuth App credentials

AUTH_GITHUB_ID=Ov23lipfbFJQzLspBO3t
AUTH_GITHUB_SECRET=...

### URL used by Auth.js to construct callbacks

#### Example: http://localhost:3000

AUTH_URL=http://localhost:3000

## TDD (tests)
> Start NextJS local
```bash
npm dev
```

## TDD  (tests)

- Vitest for unit and integration tests (*.test.ts files)
- React Testing Library (Jest) for client components
- Playwright for full browser tests (*.spec.ts files)

### Vitest (unit and integration testing)
Run tests with Vitest (combined with jest-dom):
```bash
npm run test:unit
```

### Playwright (e2e testing)

First install Playwright and browsers
```bash
npx playwright install
```

Then run test command
```bash
npm run test:e2e
```
