# Skillstack

> SkillStack is an innovative learning platform that executes student code in a secure sandbox and provides immediate, targeted feedback. It combines adaptive learning paths (learning → practicing → quests) with game elements and a leaderboard to boost motivation and a sense of ownership.
> This project is powered by Gilde Opleidingen ICT College and Comenius Teaching Fellows


## Dependencies

Minimum Node.js version > 22
Minimum Postgres version > 18

## Setup

Copy the .env_example to .env and change configuration.

Install dependencies by using:
```bash
npm install
```

### Database

Linux as root:
```bash
apt install postgresql postgresql-client

su - postgres
createuser --pwprompt rayit
Enter password for new role: 
Enter it again: 
createdb -O rayit skillstack

```

#### Quick reference commands

```bash
npx prisma contract emit       # Update contract.json and contract.d.ts
npx prisma db init             # Create tables in the database
npx prisma migration status    # Show migration status

npx prisma contract emit       # emit code changes in database
npx prisma migration plan --name add_favorite_color # Plan database change
npx prisma db migrate --advance-ref db # Apply change to database with migration
npx prisma db update --db "$DATABASE_URL" # Update database without migration
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
npm run dev
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
