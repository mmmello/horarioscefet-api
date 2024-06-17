import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET ? process.env.JWT_SECRET : '0' ;

interface DecodedToken {
    userId: string;
    iat: number;
    exp: number;
}

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return res.status(401).json({ error: 'Acesso negado' });
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({ error: 'Acesso negado' });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET) as DecodedToken;
        req.body.userId = decoded.userId;
        next();
    } catch (err) {
        res.status(401).json({ error: 'Token inválido' });
    }
};

export default authMiddleware;
