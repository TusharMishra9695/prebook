const express = require("express");

const app = express();

const port = 5000;

const product_routes = require("./routes/admin/product");

app.use("/api/products", product_routes);

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
