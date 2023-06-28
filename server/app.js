const routers = require("express")
const cors = require("cors")

const router = require("./router/index.js")
const routerLogin = require("./router/login.js")

const app = routers()

app.use(function(req, res, next){ //
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
}); 

app.use(cors());
app.use(routers.json())
app.use(routers.urlencoded({extended: false}))

app.use("/", router);
app.use("/user", routerLogin)

app.listen(8080, ()=> {
    console.log("Rodando na 8080");
});




