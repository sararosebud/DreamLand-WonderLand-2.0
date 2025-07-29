const mongoose = require('mongoose');
console.log("Connecting to Mongo URI:", process.env.MONGODB_URI);

mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb+srv://dreamuser:dream123@sararosebud.7gbrtkv.mongodb.net/?retryWrites=true&w=majority&appName=Sararosebud",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);


module.exports = mongoose.connection;