const express = require("express");
const postRoutes = require('./routes/posts.routes')
const userRoutes = require('./routes/users.routes')


const db = require('./database-mongo');

const app = express();
const PORT = process.env.PORT || 3000


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));

app.use("/api/housify",postRoutes);
app.use("/api/users",userRoutes);

app.listen(PORT, function () {
  console.log("listening on port 3000!");
});
