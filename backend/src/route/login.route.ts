import {Router} from "express"

const login=Router()

login.post('/',(request,response)=>{
     return response.json({msg:"hollo world"})
})

export default login