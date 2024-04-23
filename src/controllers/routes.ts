import express, { Router } from "express";
import grades from "./Grades";

const routes: Router = express.Router();

routes.use("/", grades);

export default routes;