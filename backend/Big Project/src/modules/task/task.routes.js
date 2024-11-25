import  express  from "express";

import { addtask, alltask, updatetask} from "./task.controller.js";
import { fileSingleUpload } from "../../FileUpload/uploads.js";

const PizzaRouter=express.Router();

PizzaRouter.post('/addtask',fileSingleUpload('image'),addtask)
PizzaRouter.get('/AllTask',alltask)
PizzaRouter.put('/UpdateTask/:id',updatetask)

export default PizzaRouter ;