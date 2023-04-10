const express = require('express')
const app = express()

app.get("/api", (req, res) => {
    res.json({'users': ['user 1', 'user 2', 'user 3']})
})

app.listen(5000, () => { console.log("server started on port 5000") })