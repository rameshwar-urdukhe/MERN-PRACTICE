const express = require('express');
const app = express();
const port = 3000;
const test = require('./routes/test.routes')

app.use('/api', test);

app.get('/',(req, res)=>{
    res.send('Get request recived!')
});

app.post('/', (req, res)=>{
    res.send('Post request recived!')
});

app.put('/:id',(req, res)=>{
    res.send('put request called')
});

app.delete('/:id', (req,res)=>{
    res.send('delete request called')
})

app.listen(port, ()=>{
    console.log(`server is running on ${port}`);
})