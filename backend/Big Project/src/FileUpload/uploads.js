import multer from "multer"
import {v4 as uuidv4} from "uuid"

export const fileSingleUpload = (fieldname)=>{

    const storage = multer.diskStorage({
        destination:  (req, file, cb)=> {
          cb(null, 'uploads/')
        },
        filename:  (req, file, cb) =>{
          cb(null, uuidv4() + "-" + file.originalname )
        }
      })
      
      const upload = multer({ storage: storage })

      return upload.single(fieldname);


}