import express from 'express';
import dotenv from "dotenv";

dotenv.config();

const app = express();


app.get("/", (req,res) => {
    res.send("server is ready in 1.. 2.. 3.. let's gooo")
})


console.log(process.env.MONGO_URI)



app.listen(5000, () => {
    console.log("zeel nu server start at http://localhost:5000 ")
})




// jVj3VTJpiUtwEWMd