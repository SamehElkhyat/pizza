import mongoose, { Schema } from "mongoose";
const pizzaSchema= new Schema({

name:String,
price:Number,
image:String

},{timestamps:true});

pizzaSchema.post('init',function(doc){
 console.log(doc)
 console.log(process.envs);
 
doc.image= 'http://localhost:3009/' +doc.image

    
})

export const pizzaModel= mongoose.model('pizza' , pizzaSchema );

