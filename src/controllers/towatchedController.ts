import { Request, Response } from 'express';
import { Films } from '../models/Films';

export const ping = (req: Request, res: Response) => {
    res.json({pong: true});
}

export const all = (req: Request, res: Response) => {

}

export const add = (req: Request, res: Response) => {
    
}

export const update = (req: Request, res: Response) => {
    
}

export const remove = (req: Request, res: Response) => {
    
}