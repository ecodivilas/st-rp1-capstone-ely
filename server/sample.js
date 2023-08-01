const { DataTypes, Model, Sequelize, QueryTypes } = require('sequelize')
// QueryType is added for hardcored queries, still working in Sequelize

const connect = () => {

    const sequelize = new Sequelize(process.env.DB_LINK, {
        dialect: 'postgres',
        protocol: 'postgres',
        dialectOptions: {
            ssl: {
                require: 'true',
            },
            trustServerCertificate: {
                require: 'true',
            },
        },
    })
}

"dev": "set HTTPS=true && nodemon ./server.js dpg-ci1itmvdvk4kgopgs520-a.oregon-postgres.render.com 5432",

DB_LINK=postgres://e_refill_user:2g8QF8aHgFqWgToAhynGnPemjwTrvpdS@dpg-ci1itmvdvk4kgopgs520-a.oregon-postgres.render.com:5432/e_refill?ssl=true