import express from 'express';
import RatingController from './controllers/RatingController';


const routes = express.Router();
const ratingControllers = new RatingController();

routes.post('/rating', ratingControllers.create);
routes.get('/rating', ratingControllers.index);


export default routes;