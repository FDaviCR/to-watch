import { Request, Response } from 'express';
import { Films } from '../models/Films';

export const ping = (req: Request, res: Response) => {
    res.json({pong: true});
}

export const all = async (req: Request, res: Response) => {
    const list = await Films.findAll();
    res.json({list});
}

export const add = async (req: Request, res: Response) => {
    if(req.body.title){
        let newFilm = await Films.create({
            title: req.body.title,
            watched: req.body.watched,
            stars: req.body.stars
        });

        res.status(201).json({ item: newFilm });
    }else{
        res.json({ error: "Dados não enviados."});
    }
}

export const update = (req: Request, res: Response) => {
    
}

export const remove = (req: Request, res: Response) => {
    
}