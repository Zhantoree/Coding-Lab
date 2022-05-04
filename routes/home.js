const express = require("express");
const router = express.Router();
// router
//     .route("/")
//     .get((req, res) => res.sendFile(process.cwd()+"/home.html"))
//     .post((req, res) => res.send("POST HOME"));

router
    .route("/main")
    .get((req, res) => res.sendFile(process.cwd()+'/styles/main.css'))
    .post((req, res) => res.sendFile(""));
router
    .route("/logo")
    .get((req, res) => res.sendFile(process.cwd()+'/img/header/logo.png'))
    .post((req, res) => res.sendFile(""));
// router
//     .route("/auth")
//     .get((req, res) => res.sendFile(process.cwd()+"/auth.html"))
//     .post((req, res) => res.send("POST HOME"));
router
    .route("/secondElem")
    .get((req, res) => res.sendFile(process.cwd()+'/img/header/secondElem.jpg'))
    .post((req, res) => res.sendFile(""));
router
    .route("/firstElem")
    .get((req, res) => res.sendFile(process.cwd()+'/img/header/firstElem.jpg'))
    .post((req, res) => res.sendFile(""));
module.exports = router;