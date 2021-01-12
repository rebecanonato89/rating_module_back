import { Request, Response } from 'express';
import db from '../database/connection';

export default class RatingController {

    async index(request: Request, response: Response) {

        const filters = request.query;


    };



    async create(request: Request, response: Response) {

        const {
            id_origin,
            title,
            description,
            starts
        } = request.body;
    
        const trx = await db.transaction();
    
        try {
            await trx('rating').insert({
                id_origin,
                title,
                description,
                starts
            });
    
            await trx.commit();
    
            return response.status(201).json({ message: 'Avaliação criada com sucesso!' })
    
        } catch (err) {
    
            await trx.rollback();
    
            console.log(err);
            return response.status(400).json({
                error: "Unexpectd error while creating new rating."
            });
        };
    
    }
};