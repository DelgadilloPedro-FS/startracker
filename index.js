// Load in our Express framework
const express = require(`express`);

// Create a new Express instance called "app"
const app = express();

//middleware
app.use(express.json());
// enabling file uploads
const fileUpload = require("express-fileupload");
app.use(fileUpload());

app.use(express.static(`${__dirname}/public`));

// Load in our RESTful routers
const routers = require("./routers/index.js");

// Configure template engine
app.set("view engine", "twig");
app.set("views", `${__dirname}/templates`);

// Home page welcome
app.get("/", (req, res) => {
  res.status(200).render(`views/Default/home.html.twig`);
});

// Register our RESTful routers with our "app"
app.use(`/planets`, routers.planet);
app.use(`/stars`, routers.star);
app.use(`/galaxies`, routers.galaxy);

// Set our app to listen on port 3000
app.listen(3000);
