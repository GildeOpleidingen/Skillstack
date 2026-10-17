import 'dotenv/config';
import { definePrismaConfig } from 'prisma/config';
import { defineConfig as ormConfig } from '@prisma/orm-postgres/config';
//import { defineConfig as composer } from '@prisma/composer/config';
//import { prismaCloud, prismaState } from '@prisma/composer-prisma-cloud/control';

export default definePrismaConfig({
  // composer: composer({
  //   extensions: [prismaCloud()],
  //   state: prismaState()
  // }),
  orm: ormConfig({
    contract: './src/prisma/**/*.prisma',
    db: {
      connection: process.env['DATABASE_URL']!,
    },
  }),
});