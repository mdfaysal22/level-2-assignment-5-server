import express from 'express';
import cors from 'cors';
import { userRouter } from './app/modules/user/user.router';
import { bookRouter } from './app/modules/book/book.router';
const app = express();


// BodyParser and Json Middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended : true}));

// App Routers
app.use('/api/v1/user/', userRouter);
app.use("/api/v1/book/", bookRouter);


app.get("/", async(req, res) => {
    res.send("Hello World")
})

export default app;