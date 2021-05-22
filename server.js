const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connect DB
connectDB();

// var allowCrossDomain = function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Content-Type, Authorization, Content-Length, X-Requested-With"
//   );
//   // intercept OPTIONS method
//   if ("OPTIONS" == req.method) {
//     res.sendStatus(200);
//   } else {
//     next();
//   }
// };

// app.use(allowCrossDomain);

// Init middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.send("App started");
});

// Define routes
app.use("/api/users", require("./routes/apis/users"));
app.use("/api/auth", require("./routes/apis/auth"));
app.use("/api/profile", require("./routes/apis/profile"));
app.use("/api/posts", require("./routes/apis/posts"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
