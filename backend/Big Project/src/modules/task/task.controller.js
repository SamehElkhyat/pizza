import { pizzaModel } from "../../../Models/Pizza.js";

export const addtask= async (req,res) => {

    req.body.image=req.file.filename
    
    await pizzaModel.insertMany(req.body)

    res.json(req.body)

}

export const alltask= async (req,res) => {

const allpizzas = await pizzaModel.find()

res.json(allpizzas)


}

export const updatetask= async (req,res) => {

    await pizzaModel.findByIdAndUpdate(req.params.id,{name: req.body.name});
    
    res.json('succsess')
    
    
}
    
