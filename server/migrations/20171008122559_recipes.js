exports.up = (knex, Promise) => {
    return knex.schema.createTable('recipes', (table) => {
        table.uuid('id').primary()
        table.string('name')
    })
}

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('recipes')
}