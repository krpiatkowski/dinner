exports.up = (knex, Promise) => {
    return knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";').then(() => {})
};

exports.down = (knex, Promise) => {
    return knex.raw('DROP EXTENSION "uuid-ossp";').then(() => {})
};