const express = require("express");
const router = express.Router();

// router
//     .route("/")
//     .get((req, res) => res.sendFile((process.cwd()+"/about.html")))
//     .post((req, res) => res.send("POST ABOUT"));
router
    .route("/tailwind")
    .get((req, res) => res.sendFile(("https://cdn.tailwindcss.com")))
    .post((req, res) => res.send("POST ABOUT"));
// router
//     .route("/auth")
//     .get((req, res) => res.sendFile((process.cwd()+"/auth.html")))
//     .post((req, res) => res.send("POST ABOUT"));
router
    .route("/Portfolio")
    .get((req, res) => res.sendFile(process.cwd()+"/styles/portfolio.css"))
    .post((req, res) => res.send("POST ABOUT"));

module.exports = router;