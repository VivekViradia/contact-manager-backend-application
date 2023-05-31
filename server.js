const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./config/dbConnection");
const dotenv = require("dotenv").config();

connectDB();
const app = express();
const port = process.env.PORT || 6000;



app.use(express.json());
app.use("/api/contacts",require("./routes/contact-routes"))
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Server Running on port ${port}`);
});
