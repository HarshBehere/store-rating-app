const { Store } = require("../models");

exports.createStore = async (req, res) => {
  const { name, description, rating } = req.body;
  const userId = req.user.id;

  try {
    console.log("Incoming store data:", req.body);
    const store = await Store.create({ name, description, rating, userId });
    res.status(201).json({ message: "Store created successfully", store });
  } catch (error) {
    console.error("Error creating store:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.getAllStores = async (req, res) => {
  try {
    const stores = await Store.findAll();
    res.status(200).json(stores);
  } catch (error) {
    console.error("Error fetching stores:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
