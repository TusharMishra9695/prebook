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
const contact_route = require("./routes/user/contact");

const product_detail_route = require("./routes/user/productDetail");
const { restrictToLoggedInOnly } = require("./middlewares/LogInOnly");
const { onlyForAdmin } = require("./middlewares/OnlyForAdmin");
const { onlyForUser } = require("./middlewares/OnlyForUser");
const { getProducts, postProducts } = require("./routes/admin/product");
const { getFaq, postFaq } = require("./routes/user/faq");
const { getAbout, postAbout } = require("./routes/admin/About");

app.use("/api/products", restrictToLoggedInOnly, getProducts);
app.use("/api/products", restrictToLoggedInOnly, onlyForAdmin, postProducts);
app.use("/api/product-detail", restrictToLoggedInOnly, product_detail_route);
app.use("/api/faq", restrictToLoggedInOnly, getFaq);
app.use("/api/faq", restrictToLoggedInOnly, onlyForAdmin, postFaq);
app.use("/api/about", restrictToLoggedInOnly, getAbout);
app.use("/api/about", restrictToLoggedInOnly, onlyForAdmin, postAbout);
app.use("/api/signup", signup_routes);
app.use("/api/login", login_routes);
app.use("/api/contact", restrictToLoggedInOnly, onlyForUser, contact_route);

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
