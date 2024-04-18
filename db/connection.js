const mongoose = require('mongoose')

mongoose.connect(process.env.CONNECTION_STRING).then(
    result=>{
        console.log(`mongo db connected`);
    }
).catch(err=>{
    console.log(`connection fail`);
    console.log(err);
})