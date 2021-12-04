const mongoose = require("mongoose");

mongoose
  .connect(`mongodb://localhost:27017/phones`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    () => {
      console.log("Database is connected");
    },
    (err) => {
      console.error("Can not connect to the database -> " + err);
    }
  );

module.exports = mongoose;
