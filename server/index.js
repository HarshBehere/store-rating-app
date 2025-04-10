const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

const db = require("./models");

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());

const userRoutes = require("./routes/userRoutes");
const storeRoutes = require("./routes/storeRoutes");

app.use("/api/users", userRoutes);
app.use("/api/stores", storeRoutes);

app.get("/", (req, res) => {
  res.send("Correct Express Server Running with Routes");
});

db.sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error(" Failed to sync database:", err);
  });
