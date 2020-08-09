require ('dotenv').config();

const dbData={
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbHost: process.env.DB_HOST,
    dbName: process.env.DB_NAME
};

const config ={
    NODE_ENV: process.env.NODE_ENV,
     db:{
        PRODUCTION:`mongodb+srv://${dbData.dbUser}:${dbData.dbPassword}@${dbData.dbHost}/${dbData.dbName}?retryWrites=true&w=majority`,
        STAGING:`mongodb+srv://${dbData.dbUser}:${dbData.dbPassword}@${dbData.dbHost}/${dbData.dbName}?retryWrites=true&w=majority`,
        TEST:`mongodb+srv://${dbData.dbUser}:${dbData.dbPassword}@${dbData.dbHost}/${dbData.dbName}?retryWrites=true&w=majority`

    },
    port: process.env.PORT,
};

module.exports = config