import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose"
import cors from "cors";
import postRoute from "./routes/posts.js"

const app = express()

app.use('/posts',postRoute)
app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());   


const CONNECTION_URL = 'mongodb+srv://socialDaily:qwerty1234@cluster0.0irc1.mongodb.net/<dbname>?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000 ;


mongoose.connect(CONNECTION_URL,{ useNewUrlParser : true , useUnifiedTopology : true } )
    .then(() => app.listen(PORT,()=> console.log(`port running on port : ${PORT}`)))
    .catch(() => console.log(error.message))

mongoose.set('useFindAndModify',false);