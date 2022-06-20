const path = require("path");
const express = require("express");
const PORT = process.env.PORT || 9000;
const router = require("./routes/posts");
const cors = require("cors");
const app = express();

app.use(express.static(path.join(__dirname, "../cc26-linky/build")));
app.use(cors());
app.use(express.json());
app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server is ready and listening on port ${PORT}`);
});
