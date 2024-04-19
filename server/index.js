const axios = require("axios");
const server = require("./src/server");
const { conn } = require('./src/db.js');
const { getDbInfo, save} = require("./src/controllers/infoApiDb")
const PORT = 3001;

conn.sync({ force: false }).then(() => {
server.listen(PORT, () => {
  

// save(),

// getDbInfo();
  console.log(`Server listening on port ${PORT}`);
})
}).catch(error => console.error(error))
