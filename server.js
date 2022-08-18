const express = require("express");
const server = express();
const cors = require("cors");
server.use(cors());


let port = process.env.PORT;
if (!port) {
	port = 3001;
}

server.get("/", (req, res) => {
    res.send({hello: "world!"});
});

server.listen(port, () => {
	console.log("Server running.");
});
