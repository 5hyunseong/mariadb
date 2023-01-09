const express = require("express");
const usersRoutes = require("./routes/users.js");
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
// app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use("/users", usersRoutes);
app.get("/", (req, res) => res.send("Welcome Root!"));
// app.get("/", (req, res) => res.send("https://web-testmovie-9z2ygb26lcefwbjk.gksl2.cloudtype.app/"));
app.all("*", (req, res) =>res.send("존재하지 않습니다."));

app.listen(PORT, () =>console.log(`Server running on port: http://localhost:${PORT}`));
