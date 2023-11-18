const express = require("express");
const cors = require("cors");
const app = require('./app');
require("./routes/etudiant")(app);
require("./routes/voiture")(app);
require("./routes/arret")(app);
require("./routes/evaluation")(app);
require("./routes/itineraire")(app);
require("./routes/inscription")(app);
require("./routes/voyage")(app);

app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 1234;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});