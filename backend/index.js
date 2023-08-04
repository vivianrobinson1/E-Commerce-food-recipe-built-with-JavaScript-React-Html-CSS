const express = require('express');
const mongoose = require('mongoose');
const {readdirSync} = require('fs') 
const cors = require('cors')
const app = express()

require('dotenv').config()

app.use(express.json()) 
app.use(cors()) 

mongoose.connect('mongodb+srv://vivianrobinson:vivian@cluster0.gfz1bwr.mongodb.net/test', {
    useUnifiedTopology: true, 
}).then(()=> console.log('DB connected'))
.catch((err) => console.log('DB Connection Error',err))

readdirSync('./route').map((r) => app.use('/api', require(`./route/${r}`)))

const port = 8000
app.listen(port, () => console.log(`Server is running on port ${port}`))
