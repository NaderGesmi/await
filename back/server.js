import express from 'express';
import router from './routes.js';
import cors from "cors";
const app = express();
app.use(cors());
app.use('/get', router);

app.listen(5000);
console.log("running");