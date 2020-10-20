const express = require("express");

const app = express();
const port = 4000;

// "importing" the routes
const indexRoute = require('./routes/index.js')
const aboutRoute = require("./routes/about.js")

// Serve static files
app.use('/static', express.static("public"));

// If someone creates a get request to our root, we send them this string
// app.get('/', (req, res) => {
//     res.send("<h1>Hello World</h1>");
// });

app.use("/", indexRoute);
app.use("/about", aboutRoute)

app.listen(port, () => console.log("Exercise three is running!"));
