const express = require("express");
const { PrismaClient } = require("@prisma/client");
const app = express();
const prisma = new PrismaClient();
app.use(express.json());

async function getPosts() {
  const allPosts = await prisma.post.findMany();
  console.log(allPosts);
  return allPosts;
}

app.get("/", (req, res) => {
  res.send(`hello`);
});

app.get("/api/posts", (req, res) => {
  getPosts()
    .then(async (r) => {
      console.log(r);
      await prisma.$disconnect();
      res.json(r);
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
    });
});

module.exports = app;
