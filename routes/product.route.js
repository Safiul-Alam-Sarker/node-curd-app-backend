const express = require("express");
const router = express.Router();

const {getProducts,getProduct,addProduct,deleteProduct, updateProduct} = require("../controllers/product.controller")

router.get("/",getProducts);
router.post("/",addProduct)
router.get("/:id",getProduct)
router.put("/:id",updateProduct);
router.delete("/:id",deleteProduct)

module.exports = router

