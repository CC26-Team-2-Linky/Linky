const express = require("express");
const config = require("../../knexfile");
const knex = require("knex")(config);
const router = express.Router();
const cors = require("cors");
router.use(cors());

require("dotenv").config({
  path: ".../.env",
});
router.use(express.urlencoded({ extended: true }));

router.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

router.get("/", (req, res) => {
  res.status(200).send("What do you want?");
});

router.get("/api", async (req, res) => {
  const results = await knex.select("*").from("posts");
  console.log(results);
  res.status(200).send(results);
});

router.get("/posts/:page", async (req, res) => {
  const page = req.params.page;
  const dbData = await knex.select("*").from("posts");
  const sortArr = dbData.sort((a, b) => b["posted-at"] - a["posted-at"]);
  res.status(200).send(sortArr.slice(page * 8 - 8, page * 8));
});

router.get("/tags/:input", async (req, res) => {
  const input = req.params.input;
  const tags = await knex.select("id", "tags").from("posts");
  const validPosts = tags
    .filter((el) => el.tags.includes(input))
    .map((el) => el.id);

  const output = await knex.select("*").from("posts").whereIn("id", validPosts);
  res.status(202).send(output);
});

router.post("/newpost", async (req, res) => {
  await knex("posts").insert({
    link: req.body.link,
    description: req.body.description,
    tags: JSON.stringify(
      req.body.tags.split(",").map((el) => el.trim().toLowerCase())
    ),
  });
});

module.exports = router;
