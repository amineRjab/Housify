const express = require("express");
const itemRoutes = require('./routes/item.routes')
const cors = require("cors")
// TODO: Update this
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// const db = require('./database-mysql');
// const db = require('./database-mongo');

const app = express();
const PORT = process.env.PORT || 3000
app.use(cors())


app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));


app.use("/api/items", itemRoutes);

app.listen(PORT, function () {
  console.log("listening on port 3000!");
});
