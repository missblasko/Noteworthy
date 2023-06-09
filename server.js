// Create express requirement and a new instance of the Express application
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001

const apiRoutes = require("./routes/apiRoutes")
const htmlRoutes = require("./routes/htmlRoutes")

app.use(express.urlencoded({extended : true }))
app.use(express.json());

app.use(express.static("public"))
app.use("/api", apiRoutes)
app.use("/", htmlRoutes)

app.listen(PORT, function(){    
console.log(`App listening at http://localhost:${PORT} :rocket:`)

})