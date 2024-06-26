exports.up = (knex) => knex.schema.createTable('dishes', (table) => {
    table.increments('id').primary();

    table.text('name').notNullable();
    table.text('description');
    table.text('photo');

    table.text('category').notNullable();
    table.float('price');
  });

exports.down = (knex) => knex.schema.dropTable('dishes');