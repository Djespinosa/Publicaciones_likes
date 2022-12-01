const express = require('express');
const path = require('path');
const methodOverride =  require('method-override');
const app = express();
const port = process.env.PORT || 3000;

// ******Static files******
app.use(express.static(path.join(__dirname, "public")));

// ******Middlewares******
app.use(express.urlencoded({ extended: false }));        
app.use(express.json());
app.use(methodOverride('_method'));

// ******Settings******
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// *******Routes*******
const indexRoute = require("./src/routes/indexRouter");
const apiUsers = require("./src/routes/usersRouter");

app.use("/", indexRoute);
app.use("/users", apiUsers);

// ******Start server******
app.listen(port, () => console.log(`Server running on port ${port}`));
