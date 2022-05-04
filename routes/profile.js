const express = require("express");
const router = express.Router();
router
    .route("/")
    .get((req, res) => res.sendFile(process.cwd()+"/profile.html"))
    .post((req, res) => res.send("POST PROFILE"));
module.exports = router;