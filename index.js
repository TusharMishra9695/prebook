const express = require("express");
const app = express();
const port = 5000;
require("./utils/dbConfig");
var bodyParser = require("body-parser");
var cors = require("cors");

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const signup_routes = require("./routes/user/signup");
const login_routes = require("./routes/user/login");
const filter_routes = require("./routes/admin/filters");
const cart_routes = require("./routes/user/cart");
const { restrictToLoggedInOnly } = require("./middlewares/LogInOnly");
const { onlyForAdmin } = require("./middlewares/OnlyForAdmin");
const { getProducts, postProducts } = require("./routes/admin/product");

app.use("/api/products", restrictToLoggedInOnly, getProducts);
app.use("/api/products", restrictToLoggedInOnly, onlyForAdmin, postProducts);
app.use("/api/signup", signup_routes);
app.use("/api/login", login_routes);
app.use("/api/filter", filter_routes);
app.use("/api/cart", cart_routes);

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
