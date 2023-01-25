const express = require("express");
const app = express();
app.use(express.json());
app.listen(5000, () => {
  console.log("Hello Server Started");
});

app.post("/post", async (req, res) => {
  console.log(req.body);
});
