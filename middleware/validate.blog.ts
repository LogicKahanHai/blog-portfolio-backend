import blogJoiSchema from "../models/blog.joi";
import { Request, Response, NextFunction } from "express";


export default function validateBlog(req: Request, res: Response, next: NextFunction) {
    const { error } = blogJoiSchema.validate(req.body);
    if (error) {
        res.json({ message: 'Format incorrect', statusCode: 400 });
        return;
    }
    next();
}