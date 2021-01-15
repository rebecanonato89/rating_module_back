import { Request, Response } from 'express';
import db from '../database/connection';

export default class RatingController {

    async index(request: Request, response: Response) {

        const filters = request.query;


        if (!filters.id_origin && !filters.starts) {

            const rating = await db('rating')
                .orderBy('starts','desc')
                .select('rating.*');

            return response.json(rating);
        }

        const starts = filters.starts ? filters.starts as string : '0';

        if (!filters.id_origin) {

            const rating = await db('rating')
                .where('starts', '>=', starts)
                .orderBy('starts','desc')
                .select();

            return response.json(rating);
        }

        const id_origin = filters.id_origin as string;

        const rating = await db('rating')
            .where('starts', '>=', starts)
            .where('id_origin', '=', id_origin)
            .orderBy('starts','desc')
            .select();

        return response.json(rating);
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