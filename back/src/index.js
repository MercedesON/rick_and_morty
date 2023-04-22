const app = require("./app");
const { conn } = require("./db");

const PORT = process.env.PORT || 3001;

app.listen(PORT, async () => {
  console.log(`Server raised in port: http://localhost:${PORT}`);
  await conn.sync({ force: true });
});

