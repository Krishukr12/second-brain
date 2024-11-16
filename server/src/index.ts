import express from "express";

const app = express();

//middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Brainy!");
});

app.listen("8080", () => {
  console.log("server is running");
});
