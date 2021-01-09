const express = require('express')
const app = express()
const port = 5000

app.use(express.static('./'))

app.get('/', (req, res) => {
    res.render('Server running yay!')   
})

app.listen(port, () => console.log(`Server running at http://localhost:${port}`))