const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const port = 3003;
dotenv.config();
app.use(express.json());
mongoose.set("strictQuery", true);

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to MongoDB."))
  .catch((err) => console.log(err));

app.use("/api/auth", authRoute);

app.listen(port, () => {
  console.log("I am alive at port: ", port);
});
