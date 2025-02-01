import express from 'express';
import router from './routes/typescript';



const app = express();


app.use(express.json());
app.use('/typescript',router);

app.listen(2525 ,() => {
    console.log("Server running on Post 2525");
})