import { module } from "@prisma/composer";
import { postgres } from "@prisma/composer-prisma-cloud/orm";

import { appContract } from "@/prisma/composer";
import app from "./service";

export default module("skillstack", ({ provision }) => {
  const database = provision(
    postgres({
      name: "database",
      contract: appContract,
      config: "./prisma.config.ts",
    }),
    { id: "database" },
  );

  provision(app, { deps: { database } });
});
