import express from 'express';
import RatingController from './controllers/RatingController';


const routes = express.Router();
const ratingControllers = new RatingController();

routes.post('/ratings', ratingControllers.create);
routes.get('/ratings', ratingControllers.index);


export default routes;