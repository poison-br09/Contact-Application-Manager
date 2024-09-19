const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.CONNECTION_STRING, {
      useNewUrlParser: true,  // These options ensure compatibility with the latest MongoDB server versions
      useUnifiedTopology: true,
    });
    console.log(`Database connected: ${connect.connection.host}, ${connect.connection.name}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDb;