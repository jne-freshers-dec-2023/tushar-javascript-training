const path = require("path");
const rootDir = require("../util/path");


exports.postLogout = (req, res, next)=>{
    console.log("I am outside destroyed")
    req.session.destroy(err =>{
        console.log("Destroyed successfully")
        console.log(err);
        res.redirect("/");
    })
}