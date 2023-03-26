const mongoose = require ("mongoose");
const DB = "mongodb+srv://employee:employee8035@cluster0.djo9su3.mongodb.net/mernstack?retryWrites=true&w=majority";
const db = "mongodb://127.0.0.1:27017/mernstack";
mongoose.connect(db,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>console.log("connection successful")).catch((error)=>console.log("connection loss"))