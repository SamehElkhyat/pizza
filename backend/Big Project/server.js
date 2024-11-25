import express from 'express'
import { DataBaseconnection } from './DBconnection/DataBaseconnection.js';
import PizzaRouter from './src/modules/task/task.routes.js';
import cors from 'cors'
const port = 3009;

const app = express();

app.use(express.json())
app.use(cors())
app.use('/',express.static('uploads'))


app.use(PizzaRouter)

DataBaseconnection()


app.get('/',(req,res)=>{

    res.json('hello to pizza project')
    
})

app.listen(port, ()=>{

console.log('listen to the ',port);

})