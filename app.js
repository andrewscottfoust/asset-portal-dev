const express = require("express");
const hbs = require("express-handlebars");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const moment = require("moment");
const config = require("./server/config/config").get(process.env.NODE_ENV);
const app = express();

////######### HBS SETUP ############/////
app.engine(
  "hbs",
  hbs({
    extname: "hbs",
    defaultLayout: "main",
    layoutsDir: __dirname + "/views/layouts",
    partialsDir: __dirname + "/views/partials"
  })
);
app.set("view engine", "hbs");

////######### DB ############/////
mongoose.Promise = global.Promise;
mongoose.connect(config.DATABASE);

// MODELS
let { User } = require("./server/models/user");
let { Asset } = require("./server/models/asset");

// MID
app.use("/css", express.static(__dirname + "/public/css"));
app.use("/fonts", express.static(__dirname + "/public/fonts"));
app.use("/js", express.static(__dirname + "/public/js"));

const { auth } = require("./server/middleware/auth");
app.use(bodyParser.json());
app.use(cookieParser());

app.get("/", auth, (req, res) => {
  if (!req.user) return res.redirect("/login");
  res.render("home", {
    user: req.user
  });
});

//////////////////////////////////////////////////////////
// USER AUTH  //
//////////////////////////////////////////////////////////

var registerRoute = require("./server/routes/register")(app, User, auth);
var loginRoute = require("./server/routes/login")(app, User, auth);
var resetPasswordRequestRoute = require("./server/routes/reset_password_request")(app, User, auth);
var logoutRoute = require("./server/routes/logout")(app, User, auth);

var registerAPI = require("./server/api/register")(app, User, auth);
var loginAPI = require("./server/api/login")(app, User, auth);
var sendResetPasswordLinkAPI = require("./server/api/send_reset_password_link")(app, User, auth);

//////////////////////////////////////////////////////////
// ADMIN  //
//////////////////////////////////////////////////////////

var adminRoute = require("./server/routes/admin")(app, User, auth, Asset);
var adminAddAssetRoute = require("./server/routes/add_asset")(app, User, auth, Asset);
var adminEditUserRoute = require("./server/routes/edit_user")(app, User, auth);

var deleteUserAPI = require("./server/api/delete_user")(app, User, auth);
var addAssetAPI = require("./server/api/add_asset")(app, User, auth, Asset);
var deleteAssetAPI = require("./server/api/delete_asset")(app, User, auth, Asset);

var port = process.env.PORT || 3000;

var server = app.listen(port, function() {
  console.log("Server running at http://127.0.0.1:" + port + "/");
});
