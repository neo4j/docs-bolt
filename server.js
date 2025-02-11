const express = require('express')

const app = express()
app.use(express.static('./build/site'))

app.use('/static/assets', express.static('./build/site/assets'))

app.listen(8000, (error) => {
    if (error) {
        throw error
    }
    console.log('📘 http://localhost:8000')
})
