const express = require("express");
const { getProducts } = require("../services/products");
const router = express.Router();

router.get("/getProducts", async (req, res) => {
  const result = await getProducts();
  if (result) {
    res.status(200).json(result);
  } else {
    res.status(500).json("Error retrieving products");
  }
});

module.exports = router;
