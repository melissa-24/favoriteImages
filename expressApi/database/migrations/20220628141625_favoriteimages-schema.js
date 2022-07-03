const { table } = require('../db-config');

exports.up = function(knex) {
    return knex.schema
      .createTable("express_user", tbl => {
        tbl.increments();
        tbl.string('firstName').notNullable();
        tbl.string('lastName').notNullable();
        tbl.string('email').unique().notNullable();
        tbl.string('username').notNullable();
        tbl.string('app').defaultTo('Express Backend API');
        tbl.string('password').notNullable();
        tbl.timestamp('createdAt').defaultTo(knex.fn.now())
      })
      .createTable('express_favorite', tbl => {
        tbl.increments();
        tbl.integer('users_id').unsigned().notNullable().references('id').inTable('express_user').onUpdate('CASCADE').onDelete('CASCADE');
        tbl.string('img').notNullable();
        tbl.string('name').notNullable();
        tbl.string('app').defaultTo('Express Backend API');
        tbl.timestamp('createdAt').defaultTo(knex.fn.now())
      })
  }
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('express_favorite')
      .dropTableIfExists('express_user')
  }; 