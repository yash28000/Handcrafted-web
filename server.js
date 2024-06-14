const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname)));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "Home.html"));
});
const PORT = 3001;
app.listen(PORT, () => {
  console.log('Server is running on http://localhost:${PORT}');
});