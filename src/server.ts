import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors({ origin: 'rating-module-front.vercel.app' }));
app.use(express.json());
app.use(routes);



app.listen(3333, () => {
    console.log("🛹 Back-end started!");
});


