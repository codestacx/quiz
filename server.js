const express = require("express");
const app = express();
app.use(express.static(__dirname + "/public"));

const Connect = require("./config/db");
Connect();

const cors = require("cors");
const corsOption = {
  origin: ["http://127.0.0.1:5000"],
};
// //connect database
app.use(cors(corsOption));

app.use(express.json({ extended: false }));
app.use("/api", require("./routes/api"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
