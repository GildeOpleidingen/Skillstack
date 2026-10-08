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
