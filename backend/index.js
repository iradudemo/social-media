const express = require("express");
const dotenv = require("dotenv");
const helmet = require("helmet");
const mongoose = require("mongoose");
const DbConnection = require("./db/db");
const morgan = require("morgan");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

// routes
const userRouter = require("./routes/users");
const authRouter = require("./routes/auth");
const postRouter = require("./routes/post");
const conversationRouter = require("./routes/conversation");
const messageRouter = require("./routes/messages");

const app = express();

dotenv.config();

DbConnection();
app.use("/images", express.static(path.join(__dirname, "public/images")));

// Middleware
app.use(cors());
app.use(express.json()); //bodyParser allow post request
app.use(helmet());
app.use(morgan("dev"));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("File uploaded successfully");
  } catch (error) {
    console.log(error);
  }
});

app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/post", postRouter);
app.use("/api/conversations", conversationRouter);
app.use("/api/messages", messageRouter);

PORT = process.env.PORT;
app.listen(PORT, console.log(`Server started at ${PORT}`));
