import express from 'express'
import route from './route'
import './database'
const app=express()
app.use(route)
app.listen(3333,()=>{
    console.log("server is running ✔🐱‍🏍🎉😁")
})