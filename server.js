const express = require("express");
const { PrismaClient } = require("@prisma/client");
const app = express();
const prisma = new PrismaClient();
app.use(express.json());

async function getPosts() {
  const allPosts = await prisma.post.findMany();
  return allPosts;
}

app.get("/", (req, res) => {
  res.send(`hello`);
});

app.get("/api/posts", (req, res) => {
  getPosts()
    .then(async (r) => {
      await prisma.$disconnect();
      res.json(r);
    })
    .catch(async () => {
      await prisma.$disconnect();
      process.exit();
    });
});

module.exports = app;
