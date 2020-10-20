const express = require("express");

const router = express.Router()

router.get('/', (req, res) => {
    res.send("About this page: Exercise Three")
})

router.get('/me', (req, res) => {
    res.send("About this page: Me")
})

router.get('/json', (req, res) => {
    res.send([{ itemOne: "item one", itemTwo: "item two"}])
})

module.exports = router;