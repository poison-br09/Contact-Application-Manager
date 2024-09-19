const express = require("express");
const errorHandler = require("./src/middleware/errorHandler.middleware.js");
const connectDb = require("./src/config/dbConnect.config.js");
const dotenv = require("dotenv").config();

connectDb();

const app = express(); // express application starting declaration

const port = process.env.PORT || 5001; // declaration of the port
app.use(express.json); // using middleware
app.use("/api/contacts", require("./src/routes/contact.routes.js"));
app.use("/api/users", require("./src/routes/user.routes"));
app.use(errorHandler);
app.listen(port,()=>{
    console.log(`Server running on the port ${port}`)
})