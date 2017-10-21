exports.up = (knex, Promise) => {
    return knex.schema.createTable('recipes', (table) => {
        table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'))
        table.string('name').unique()
    })
}

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('recipes')
}