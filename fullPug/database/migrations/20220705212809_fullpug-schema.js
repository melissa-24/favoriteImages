const {table} = require('../db-config')


exports.up = function(knex) {
    return knex.schema
        .createTable('pug_user', tbl => {
            tbl.increments();
            tbl.string('firstName').notNullable();
            tbl.string('lastName').notNullable();
            tbl.string('email').unique().notNullable();
            tbl.string('username').notNullable();
            tbl.string('app').defaultTo('Full Pub App');
            tbl.string('password').notNullable();
            tbl.timestamp('createdAt').defaultTo(knex.fn.now())
        })
        .createTable('pug_favorite', tbl => {
            tbl.increments();
            tbl.integer('users_id').unsigned().notNullable().references('id').inTable('pug_user').onUpdate('CASCADE').onDelete('CASCADE');
            tbl.string('img').notNullable();
            tbl.string('name').notNullable();
            tbl.string('app').defaultTo('Full Pug App');
            tbl.timestamp('createdAt').defaultTo(knex.fn.now());
        })
}
exports.down = function(knex) {
    return knex.schema  
        .dropTableIfExists('pug_favorite')
        .dropTableIfExists('pug_user')
}