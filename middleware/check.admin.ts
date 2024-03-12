import { Request, Response, NextFunction } from "express";

export default function checkAdmin(req: Request, res: Response, next: NextFunction) {
    const isRishi = req.headers.authorization === "Bearer " + process.env.HEADER_SECRET;
    if (!isRishi) {
        res.json({ message: "Unauthorized", statusCode: 401 });
        return;
    }
    next();
}