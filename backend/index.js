const express = require('express');
const {createTodo, updateTodo} = require('./types');
const {Todo} = require('./db')
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());


app.post('/todo',async (req,res)=>{
    const createInputs = req.body;
    const valid = createTodo.safeParse(createInputs);
    if(!valid.success){
        return res.status(411).send({
            msg : "You sent the wrong inputs",
        })
    }
    await Todo.create({
        title : createInputs.title,
        description : createInputs.description,
        completed : false
    })
    res.json({
        msg : "Todo Created"
    })
})

app.get('/todos',async (req,res)=>{
    const todos = await Todo.find({});
    res.json({
        todos
    })
})

app.put('/completed',async (req,res)=>{
    const updateInputs = req.body;
    const valid = updateTodo.safeParse(updateInputs);
    if(!valid){
        res.status(411).send({
            msg : "You sent the wrong inputs",
        })
    }
    await Todo.updateOne({
        _id : updateInputs._id
    },{
        completed : true
    })
    res.json({
        msg : "Todo Updated"
    })

})

app.listen(3000);