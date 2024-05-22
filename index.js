const express = require("express");
const cors = require("cors");
const db = require("./src/models/index.js");

const app = express();
app.use(cors());
app.use(express.json());


db.sequelize.sync({force: true}).then(() => {
    console.log("Drop and Resync Db");
})

app.get("/", (req, res) => {
    res.json({message: "welcome to teacher service"})
});

require("./src/routes/teacher.routes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Teacher Service is running`)
});