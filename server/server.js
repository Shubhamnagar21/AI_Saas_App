import express from "express";
import cors from 'cors';
import 'dotenv/config'


const app = express();
import { clerkMiddleware ,requireAuth} from "@clerk/express";


app.use(cors())
app.use(express.json())
app.use(clerkMiddleware());
app.use

app.get('/', (req,res)=> res.send('Server is Live!'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log('Server is running on port', PORT);

})
