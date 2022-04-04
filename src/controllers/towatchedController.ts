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

export const update = async (req: Request, res: Response) => {
    const id: string = req.params.id;

    let towatched = await Films.findByPk(id);
    if(towatched){
        if(req.body.title){
            towatched.title = req.body.title;
        };
        if(req.body.watched){
            switch(req.body.watched.toLowerCase()){
                case 'true':
                case '1':
                    towatched.watched = true;
                    break;
                case 'false':
                case '0':
                    towatched.watched = false;
                    break;
            }
        };
        if(req.body.stars){
            towatched.stars = req.body.stars;
        };

        await towatched.save();
        res.json({ item: towatched });
    }else{
        res.json({ error: 'Item não encontrado.' });
    }
}

export const remove = async (req: Request, res: Response) => {
    const id: string = req.params.id;

    let towatched = await Films.findByPk(id);
    if(towatched){
        await towatched.destroy();
    }
    res.json({});
}