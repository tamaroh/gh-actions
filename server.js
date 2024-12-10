const express = require("express");
const { PrismaClient } = require("@prisma/client");
const app = express();
const prisma = new PrismaClient();
app.use(express.json());

async function getPosts() {
  return await prisma.post.findMany();
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
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
    });
});

module.exports = app;
