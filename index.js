const express = require("express");
const userRouter = require("./routes/userRouter");
const productRouter = require("./routes/productRouter");
const categoryRouter = require("./routes/categoryRouter");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectdb = require("./config/dbController");
const cartRouter = require("./routes/cartRouter");
const orderRouter = require("./routes/orderRouter");
const adminRouter = require("./routes/adminRouter");
const path = require("path");
const app = express();

// Load environment variables
require("dotenv").config();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));
connectdb();
//Middlerware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

// Define a route to render the index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.use("/api", userRouter);
app.use("/api", productRouter);
app.use("/api", categoryRouter);
app.use("/api", cartRouter);
app.use("/api", orderRouter);
app.use("/api", adminRouter);

const port = process.env.PORT;

app.listen(port, () => console.log("User Authetication"));
