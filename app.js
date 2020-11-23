const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"));
app.set('view engine', 'ejs')

let todoList = ["Thing one", "thing two"]

app.get('/', (req, res)=> {

    const day = new Date();
    const options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    }
    const today = day.toLocaleDateString("en-US", options);
    

    res.render('list', {dateHeading: today, todoList:todoList})
})

app.post('/', (req, res)=> {
    let todoItem = req.body.newTodoItem;
    todoList.push(todoItem)
    res.redirect('/')
})

app.listen(3000, console.log('App started on port 3000'));
