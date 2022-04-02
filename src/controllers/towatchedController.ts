import { Request, Response } from 'express';
import { Films } from '../models/Films';

export const ping = (req: Request, res: Response) => {
    res.json({pong: true});
}

