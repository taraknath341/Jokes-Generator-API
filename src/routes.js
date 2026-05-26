import express from "express";
import jokesData from "./jokes.data.js";
import { joke_title_is_valid } from "./service.js";

const router = express.Router();

router.param("jokeTitle", (req, res, next, jokeTitle) => {
   joke_title_is_valid(jokeTitle);
   next();
});

router.get("/:jokeTitle", (req, res) => {
   const jokes = jokesData[req.params.jokeTitle];
   const randomNum = Math.floor(Math.random() * jokes.length);
   res.json(jokes[randomNum]);
});

router.get("/", (req, res) => {
   const jokes = Object.values(jokesData).flat();
   const randomNum = Math.floor(Math.random() * jokes.length);
   res.json(jokes[randomNum]);
});

export default router;