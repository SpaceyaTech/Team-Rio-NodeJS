const express = require('express')
const app = express()

// Add your port here
const PORT = 4000 || process.env.PORT;

// This is the default route.
app.get('/', (req, res) => {
    res.send("Hello from the server!")
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}...`)
})