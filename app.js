const express = require("express");
const cors = require("cors");

const usersRoutes = require("./routes/users.routes");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/users", usersRoutes);

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});