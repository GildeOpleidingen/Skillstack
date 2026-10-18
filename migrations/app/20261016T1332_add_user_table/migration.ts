#!/usr/bin/env -S node
import type { Contract as Start } from '../../snapshots/797cfed44e9c40efbc00a689b87c92c44cd4b60e1ae3d6ffbc0304d8f348aaf5/contract';
import startContract from '../../snapshots/797cfed44e9c40efbc00a689b87c92c44cd4b60e1ae3d6ffbc0304d8f348aaf5/contract.json' with { type: 'json' };
import type { Contract as End } from '../../snapshots/93eaa1ffc1d7549072bdf4690f10e6c8fd91fb07e6ce39e981a49ea20d452032/contract';
import endContract from '../../snapshots/93eaa1ffc1d7549072bdf4690f10e6c8fd91fb07e6ce39e981a49ea20d452032/contract.json' with { type: 'json' };
import { Migration, MigrationCLI, col, placeholder } from '@prisma/orm-postgres/migration';

export default class M extends Migration<Start, End> {
  override readonly startContractJson = startContract;
  override readonly endContractJson = endContract;

  override get operations() {
    return [
      this.dropTable({ schema: 'public', table: 'Post' }),
      this.dropColumn({ schema: 'public', table: 'User', column: 'name' }),
      this.dropColumn({ schema: 'public', table: 'User', column: 'updatedAt' }),
      this.dropColumn({ schema: 'public', table: 'User', column: 'username' }),
      this.dropConstraint({
        schema: 'public',
        table: 'User',
        constraint: 'User_pkey',
        kind: 'primaryKey',
      }),
      this.dropColumn({ schema: 'public', table: 'User', column: 'id' }),
      this.addColumn({
        schema: 'public',
        table: 'User',
        column: col('avatar_url', 'text', { codecRef: { codecId: 'pg/text@1' } }),
      }),
      this.addColumn({
        schema: 'public',
        table: 'User',
        column: col('company', 'text', { codecRef: { codecId: 'pg/text@1' } }),
      }),
      this.addColumn({
        schema: 'public',
        table: 'User',
        column: col('full_name', 'text', { codecRef: { codecId: 'pg/text@1' } }),
      }),
      this.addColumn({
        schema: 'public',
        table: 'User',
        column: col('location', 'text', { codecRef: { codecId: 'pg/text@1' } }),
      }),
      this.addColumn({
        schema: 'public',
        table: 'User',
        column: col('github_id', 'int4', { codecRef: { codecId: 'pg/int4@1' } }),
      }),
      this.dataTransform(endContract, 'backfill-User-github_id', {
        check: () => placeholder('backfill-User-github_id:check'),
        run: () => placeholder('backfill-User-github_id:run'),
      }),
      this.setNotNull({ schema: 'public', table: 'User', column: 'github_id' }),
      this.addColumn({
        schema: 'public',
        table: 'User',
        column: col('github_username', 'text', { codecRef: { codecId: 'pg/text@1' } }),
      }),
      this.dataTransform(endContract, 'backfill-User-github_username', {
        check: () => placeholder('backfill-User-github_username:check'),
        run: () => placeholder('backfill-User-github_username:run'),
      }),
      this.setNotNull({ schema: 'public', table: 'User', column: 'github_username' }),
      this.dropNotNull({ schema: 'public', table: 'User', column: 'email' }),
      this.addUnique({
        schema: 'public',
        table: 'User',
        constraint: 'User_github_id_key',
        columns: ['github_id'],
      }),
      this.addUnique({
        schema: 'public',
        table: 'User',
        constraint: 'User_github_username_key',
        columns: ['github_username'],
      }),
    ];
  }
}

MigrationCLI.run(import.meta.url, M);
