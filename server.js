// get express module from npm
const express = require("express");
// create instance of express for server functionality
const server = express();
// get cors module from npm for cross resource sharing
const cors = require("cors");
// give the server the ability to connect with frontend
server.use(cors({credentials: true, origin: ["http://localhost:3000", "https://lgoodman320-capstone-frontend.herokuapp.com"]}));
// get body-parser module to parse json from the body of request
const bodyParser = require("body-parser");
//give the server the ability to parse json from the body of request
server.use(bodyParser.json());
// get becryp module from npm for encrypting passwords
const bcrypt = require("bcrypt");

// set the port to the PORT environment variable
let port = process.env.PORT;

// if there is no PORT environment variable
if (!port) {
    // set the port to 3001
	port = 3001;
}

// set up route to root path of backend
server.get("/", (req, res) => {
    // send {hello: "world"} as a response
    res.send({hello: "world!"});
});

// set server to listen to port 
server.listen(port, () => {
    // console log "Server is running."
	console.log("Server running.");
});
