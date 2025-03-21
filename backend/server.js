const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  
  // Check if email and password are provided
  if (!email || !password) {
    return res.status(400).json({ success: false, message: "Email and Password are required" });
  }

  // Dummy login check
  if (email === "admin@example.com" && password === "password123") {
    res.json({ success: true });
  } else {
    res.status(401).json({ success: false });
  }
});

app.listen(5000, "0.0.0.0", () => console.log("Server running on port 5000"));

// app.listen(5000, () => console.log("Server running on port 5000"));








// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// app.post("/api/login", (req, res) => {
//     console.log("Received Request Body:", req.body);
//   const { email, password } = req.body;

//   if (email === "admin@example.com" && password === "password123") {
//     res.json({ message: "Login Successful!" });
//   } else {
//     res.status(401).json({ message: "Invalid Credentials" });
//   }
// });

// app.listen(5000, () => console.log("Server running on port 5000"));
