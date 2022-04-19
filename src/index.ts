import express from "express";
//import songRouter from "./routes/songs";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors())

//app.use("/api/songs", songRouter)
app.get("/api/", (req, res) => {
  res.send("hello :)")
})

app.listen(PORT, () => {
  console.log(`working on http://localhost:${PORT}`);
});

export { express };
