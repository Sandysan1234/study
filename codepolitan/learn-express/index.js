const express = require ('express')
const port = 3000
const app = express ()



app.get('/', (req,res) =>{
    res.send('makan bang')
})
app.get('/cats', (req,res) =>{    
    res.send('makan kucing')
})

app.listen(port, () =>{
    console.log(`app listen http://localhost:${port}`);
    
})