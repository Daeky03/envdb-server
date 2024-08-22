const { envdbServer } = require("envdb");
envdbServer(3000, process.env.username, process.env.password)
