// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host : 'mysql.codefour.com.br',
      user : 'codefo06_jaq',
      password : 'Code123!@#',
      database : 'codefo06_hekpdesk'
    },
    migrations : {
      directory: './src/database/migrations',
      tableName: 'knex_migrations'
    },
    useNullAsDefault: true,
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
