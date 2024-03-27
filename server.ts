import cors from "cors";
import { configDotenv } from "dotenv";
import express, { Express, Request, Response } from "express";
import connect from "./db/conn";
import Projects from "./models/project.model";

configDotenv();

const app: Express = express();

app.use(cors({ origin: ["https://rishibhalla.me", "https://www.rishibhalla.me"] }));
app.use(express.json());

app.get("/projects-list", async (req: Request, res: Response) => {
  const projects = await Projects.find({}).select(
    "title teaser dateTime tags id",
  );
  const finalprojects = projects.map((project) => {
    return {
      id: project.id,
      title: project.title,
      teaser: project.teaser,
      dateTime: project.dateTime,
      tags: project.tags,
    };
  });
  res.json({ data: finalprojects });
});

app.get("/projects/:id", async (req: Request, res: Response) => {
  const project = await Projects.findOne({ id: req.params.id });
  res.json({ data: project });
});

connect()
  .then(() => {
    app.listen(process.env.PORT || 8008, () => {
      console.log("Server is running");
    });
  })
  .catch((err) => {
    console.log(err);
  });
