const express = require("express");
const dotenv = require("dotenv");
const app = express();

dotenv.config();
const db = require("./db/db");
const userRouter = require("./routers/routes/useFile");

// dotenv.config = تجعل الاندكس يتعرف عليها
const PORT = process.env.PORT;
app.use(express.json());
app.use("/userPath", userRouter);
app.use("/", userRouter);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
