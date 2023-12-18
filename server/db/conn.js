const mongoose = require('mongoose');

const DB = process.env.DATABASE;

mongoose.connect(DB).then(() => {
    console.log(`**Connected to database is Successful..**`);
}).catch((err) => console.log(`**No Connection**`));