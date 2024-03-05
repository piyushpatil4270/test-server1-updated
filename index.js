import express from "express"

const app = express()

let port = 5200

app.get("/",(req,res)=>{
    res.send("this is test server 1")
})

app.listen(port,()=>{
    console.log(`Server started on port ${port}...`)
})