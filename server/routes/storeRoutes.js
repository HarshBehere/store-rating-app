const express = require("express");
const router = express.Router();
const storeController = require("../controllers/storeController");

// ✅ This route is important!
router.get("/", storeController.getAllStores);

module.exports = router;
