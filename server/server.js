const express = require("express");
const cors =require("cors");
const app = express();
const PORT = 2222;
const DB = 'koalas_db';

app.use(cors(), express.json(), express.urlencoded({extended: true}));

require("./config/mongoose.config")(DB)

app.listen(PORT, ()=> {
    console.log(`server up on port:${PORT}`)
})

