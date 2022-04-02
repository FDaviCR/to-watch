import { Request, Response } from 'express';
import { Films } from '../models/Films';

export const ping = (req: Request, res: Response) => {
    res.json({pong: true});
}

export const all = async (req: Request, res: Response) => {
    const list = await Films.findAll();
    res.json({list});
}

export const add = (req: Request, res: Response) => {
    
}

export const update = (req: Request, res: Response) => {
    
}

export const remove = (req: Request, res: Response) => {
    
}