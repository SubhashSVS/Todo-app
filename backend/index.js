const express = require('express');
const {createTodo, updateTodo} = require('./types');

const app = express();
app.use(express.json());

app.post('/todo',(req,res)=>{
    const valid = createTodo.safeParse(req.body);
    if(!valid.success){
        res.status(411).send({
            msg : "You sent the wrong inputs",
        })
    }
})

app.get('/todos',(req,res)=>{

})

app.put('/completed',(req,res)=>{
    const valid = updateTodo.safeParse(req.body);
    if(!valid){
        res.status(411).send({
            msg : "You sent the wrong inputs",
        })
    }
})

app.listen(3000);