require('dotenv').config();

const pgConnection = process.env.DATABASE_URL || 'postgresql://postgres@localhost/auth';
const DB = process.env.DB
const PW = process.env.PW
const USER = process.env.USER

module.exports = {

  development: {
    // client: 'sqlite3',
    // connection: {
    //   filename: './database/favoriteimgs.db3'
    // },
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      port : 3306,
      user : 'root',
      password : PW,
      database : DB
    },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations',
      tableName: 'dbmigrations',
    },
    seeds: {
      directory: './database/seeds'
    }
    // pool: {
    //   afterCreate: (conn, done) => {
    //     conn.run('PRAGMA foreign_keys = ON', done);
    //   },
    // },
  },

  production: {
    client: 'mysql',
    connection: {
      host : 'localhost',
      port : 3306,
      user : USER,
      password : PW,
      database : DB
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './database/migrations',
    },
    seeds: {
      directory: './database/seeds',
    },
  },

};