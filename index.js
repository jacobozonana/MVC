const { app } = require('./api');
const {config } = require('./config');
const mongoose = require('mongoose');

mongoose.connect(
    config.db.TEST,
    { useNewUrlParser: true, useUnifiedTopology: true }
)
.then(()=>console.log('Connected to DB'))
.catch((err)=> console.log('Error on Connection', err))

app.listen(config.port, ()=> console.log(`Listening on port ${config.port}`))