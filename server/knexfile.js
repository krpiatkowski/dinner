// Update with your config settings.

module.exports = {
    development: {
        client: 'postgresql',
        connection: {
            database: 'dinner_dev',
            user: 'dinner_dev',
            password: 'dinner_dev'
        },
    },
    production: {
        client: 'postgresql',
        connection: process.env.DATABASE_URL,
    }
};