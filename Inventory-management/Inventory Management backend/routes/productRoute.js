const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deletProdcut,
  getProductDetails,
  createProductReview,
  getProductReviews,
  deleteReview,
} = require("../controllers/productControler");
const { authCheck, adminCheck } = require("../middlewares/auth");

const router = express.Router();

router.route("/products").get(getAllProducts); // we use our controller.

router.route("/admin/product/new").post(authCheck, adminCheck, createProduct); // we use this to create new Product

// delet, update, get-------------------
router
  .route("/admin/product/:id")
  .put(authCheck, adminCheck, updateProduct)
  .delete(authCheck, adminCheck, deletProdcut);

router.route("/product/:id").get(getProductDetails);

router.route("/review").put(authCheck, adminCheck);

router.route("/reviews").get(getProductReviews).delete(authCheck, deleteReview);

module.exports = router;
