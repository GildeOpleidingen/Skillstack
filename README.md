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

After creating the .env file with the right database URL.
You can create the database with the command:

```bash
npx prisma db push
```

To Seed the database with test rows:

```bash
npm run seed
```
To create a new migration (after changing .prisma files in prisma folder)

```bash
npx prisma migrate dev --name rename_exercises_to_assessments --create-only
```

To validate the changes:

```bash
npx prisma validate
```

To create the new migration:

```bash
npx prisma migrate dev
```

#### Linux database postgresql installation

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

see: npm run 

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
