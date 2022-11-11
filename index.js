import express from "express";

const app = express();
app.use(express.json());

app.get("/helth", (req, res) => {
  res.send("Kashi");
});
app.listen("4000", () => {
  console.log("listening 4000");
});
