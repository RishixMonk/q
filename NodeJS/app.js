let express = require("express"); // express modules, importing express object
let app = express(); // creating object of this express class
let bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());

let basicRouter = require("./routes/basicRoutes");
let fileRouter = require("./routes/fileRoutes");
let userRouter = require("./routes/userRoutes");
let blogRouter = require("./routes/blogRouter");
let mongoose = require("mongoose");

let User = require("./models/user");
let Blog = require("./models/blog");

let myLogger = require("./middleWares/logger");

app.use(bodyParser.json()); // middleware attached to all routes for app instance shriramu:akila2002

app.use(myLogger);
app.use("/basic",basicRouter);
app.use("/file", fileRouter);
app.use("/user",userRouter);
app.use("/blog",blogRouter);

mongoose.connect("mongodb://Shriramu:akila2002@ac-xtkle9l-shard-00-00.bmgakwa.mongodb.net:27017,ac-xtkle9l-shard-00-01.bmgakwa.mongodb.net:27017,ac-xtkle9l-shard-00-02.bmgakwa.mongodb.net:27017/blogwebsite?ssl=true&replicaSet=atlas-enf3zy-shard-0&authSource=admin&retryWrites=true&w=majority");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection error: "));
db.once("open", function () {
    console.log("Database Connected successfully");
})

/*
        Assignment :: Routes Specific to Blog (new Router file specific to blogs )
                         1. Add Blog
                           2. Delete Blog
                              3. Find Blog
                                4. Update Blog
 */

app.listen(8080,function(req,res) {

    console.log("Listening on port " + 8080);
})
