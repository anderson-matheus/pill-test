const express = require('express')
const app = express()
const request = require('request')
const dotenv = require('dotenv')
dotenv.config()
const { chunk } = require('./utils')

app.get("/api/matches", (req, res) => {
    const options = {
        'method': 'GET',
        'url': `${process.env.API_URL}/competitions/2013/matches`,
        'headers': {
            'X-Auth-Token': process.env.TOKEN
        }
    }
    request(options, function (error, response) {
        if (error) throw new Error(error)
        const body = JSON.parse(response.body)
        const matches  = body.matches
        const matchdays = chunk(matches, 10)
        res.json(matchdays[4])
    })
})

app.listen(5000, () => { console.log("server started on port 5000") })