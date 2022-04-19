import express from "express";

const projectRouter = express.Router();

projectRouter.get("/", (_, res) => {
  res.send("getting all projects");
});

export default projectRouter;
