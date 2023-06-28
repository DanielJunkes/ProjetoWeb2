const routers = require("express")
const cors = require("cors")

const router = require("./router/index.js")

const app = routers()
app.use(cors());

app.use("/", router);

app.listen(8080, ()=> {
    console.log("Rodando na 8080");
});




