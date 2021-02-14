import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('rating', table => {
        table.increments('id').primary();
        table.string('id_origin').notNullable();
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.integer('stars').notNullable();
    });
};

export async function down(knex: Knex) {
    return knex.schema.dropTableIfExists('rating');
};