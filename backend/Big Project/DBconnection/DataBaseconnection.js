import Mongoose from "mongoose";

export function DataBaseconnection() {

    Mongoose.connect('mongodb://127.0.0.1:27017/Pizza').then(()=>{

           console.log("connection succses");
                
        }).catch((err)=>{
        
            console.log('something not good',err);
            
        })
}