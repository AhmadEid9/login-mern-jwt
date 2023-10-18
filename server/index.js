const express = require('express')
const  mongoose = require('mongoose')

const cors = require('cors')
const bodyParser = require('body-parser')

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')



const app = express()
const PORT = 3001

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))