console.clear()
console.log("hello world")

const http = require ("http")

const server = http.createServer((req,res)=>(
    res.end("<h1>Hello Node!!!!</h1>")
))
server.listen(3000,(err)=>{
    if (err) {
        console.log(err)
    }
    else{
        console.log("server is runing on http://localhost:3000")
    }
 } )

 const fs = require ("fs")
 fs.writeFile("welcome.txt", "hello node" , (err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("file created")
    }
})

 fs.readFile("welcome.txt", "utf-8" , (err,data)=>{
    if(err){
        console.error(err)
    }
    else{
        console.log(data)
    }
})

const generate= require("generate-password")
const pass =generate.generate({
    numbers : true,
    symbols:true,
 })
console.log("this is password : " ,pass)

const nodemailer=require("nodemailer")
const { CLIENT_RENEG_LIMIT } = require("tls")
const transporter =nodemailer.createTransport({
    service: "gmail"
    auth : {
        user: "",
        pass: ""
    }

})

const optionMails=  {
    from:"",
    to:"",
    subject:"",
    text:""
}

transporter.sendMail(optionMails, (err,res)=>{
    if (er){
        console.error(err)
    }else{
        console.log(res)
    }
}

