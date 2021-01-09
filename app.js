const express = require('express')
const app = express()
const port = 5000

app.use(express.static('./'))
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Server running yay!')   
})

app.post('/getCookies', async (req, res) => {
    const body = req.body
    console.log(body)
    res.json({ok: true, msg: 'Data received'})
})

app.listen(port, () => console.log(`Server running at http://localhost:${port}`))