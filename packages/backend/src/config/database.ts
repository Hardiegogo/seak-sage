const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://chiraggps:hardie123@chiragscluster.yviarut.mongodb.net/",
  { useUnifiedTopology: true, useNewUrlParser: true }
);
