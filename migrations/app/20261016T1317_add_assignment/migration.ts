#!/usr/bin/env -S node
import type { Contract as Start } from '../../snapshots/797cfed44e9c40efbc00a689b87c92c44cd4b60e1ae3d6ffbc0304d8f348aaf5/contract';
import startContract from '../../snapshots/797cfed44e9c40efbc00a689b87c92c44cd4b60e1ae3d6ffbc0304d8f348aaf5/contract.json' with { type: 'json' };
import type { Contract as End } from '../../snapshots/9064709980fe813ae09a6ef738581245b9b861c6c7176bc50f0475c7d36f5ed7/contract';
import endContract from '../../snapshots/9064709980fe813ae09a6ef738581245b9b861c6c7176bc50f0475c7d36f5ed7/contract.json' with { type: 'json' };
import { Migration, MigrationCLI, col, fn, primaryKey } from '@prisma/orm-postgres/migration';

export default class M extends Migration<Start, End> {
  override readonly startContractJson = startContract;
  override readonly endContractJson = endContract;

  override get operations() {
    return [
      this.dropTable({ schema: 'public', table: 'Post' }),
      this.dropTable({ schema: 'public', table: 'User' }),
      this.createTable({
        schema: 'public',
        table: 'Assignment',
        columns: [
          col('assignmentTypeId', 'uuid', { notNull: true, codecRef: { codecId: 'pg/uuid@1' } }),
          col('createdAt', 'timestamptz', {
            notNull: true,
            default: fn('now()'),
            codecRef: { codecId: 'pg/timestamptz-string@1' },
          }),
          col('description', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('id', 'uuid', { notNull: true, codecRef: { codecId: 'pg/uuid@1' } }),
          col('profilePhotoUrl', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('title', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('updatedAt', 'timestamptz', {
            notNull: true,
            codecRef: { codecId: 'pg/timestamptz-string@1' },
          }),
        ],
        constraints: [primaryKey(['id'])],
      }),
      this.createTable({
        schema: 'public',
        table: 'AssignmentType',
        columns: [
          col('createdAt', 'timestamptz', {
            notNull: true,
            default: fn('now()'),
            codecRef: { codecId: 'pg/timestamptz-string@1' },
          }),
          col('id', 'uuid', { notNull: true, codecRef: { codecId: 'pg/uuid@1' } }),
          col('typeName', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('updatedAt', 'timestamptz', {
            notNull: true,
            codecRef: { codecId: 'pg/timestamptz-string@1' },
          }),
        ],
        constraints: [primaryKey(['id'])],
      }),
      this.createIndex({
        schema: 'public',
        table: 'Assignment',
        index: 'Assignment_assignmentTypeId_idx_4ecbb171',
        columns: ['assignmentTypeId'],
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'Assignment',
        foreignKey: {
          name: 'Assignment_assignmentTypeId_fkey',
          columns: ['assignmentTypeId'],
          references: { schema: 'public', table: 'AssignmentType', columns: ['id'] },
        },
      }),
    ];
  }
}

MigrationCLI.run(import.meta.url, M);
