import express, { Express, Response, Request } from "express";
import dotenv from "dotenv";
import connect from "./db/conn";
import Blog from "./models/blog.model";
import checkAdmin from "./middleware/check.admin";
import validateBlog from "./middleware/validate.blog";

dotenv.config();

const server: Express = express();
server.use(express.json());
const port: number = parseInt(process.env.PORT as string, 10) || 3000;

server.get("/blog-teasers", (req: Request, res: Response) => {
    Blog.find({}, "title teaser dateTime tags").then((blogs) => {
        res.json(blogs);
    }).catch((error) => {
        res.json({ message: error.message, statusCode: 500 });
    });
});

server.post("/create-blog", [checkAdmin, validateBlog], (req: Request, res: Response) => {
    const blog = new Blog(req.body);
    blog.save().then(() => {
        res.json({ message: "Blog created successfully", statusCode: 201 });
    }).catch((error) => {
        res.json({ message: error.message, statusCode: 500 });
    });
});



connect().then(() => {
    server.listen(port, () => {
        console.log(`[server]: Server is running on http://localhost:${port}`);
    });
}).catch((error) => {
    console.error(`[server]: ${error}`);
});