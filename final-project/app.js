let express = require("express");
let app = express();
let mongoose = require("mongoose");
let bodyParser = require("body-parser");
const indexRouter = require("./routes/index");
const cors = require("cors");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", indexRouter);
app.use(cors());

const mongodb = "mongodb://localhost/studentElectives";
const mongo = mongoose.connect(mongodb, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongo.then(
  () => {
    console.log("connected");
  },
  (error) => {
    console.log(error, "error");
  }
);

app.listen(3000, function () {
  console.log("App listening on 3000 port");
});
