let express  = require("express")
let bodyParser = require("body-parser");
let app=express()
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.sendFile(__dirname +"/index.html")
}) 
app.post("/",(req,res)=>{
    let num1=Number(req.body.value1)
    let num2=Number(req.body.value2)
    result= num1 + num2
    res.send("your calulation is " + result )
})

app.get("/bmi_cal",(req,res)=>{
    res.sendFile(__dirname+"/bmi_cal.html")
})

app.post("/bmi_cal",(req,res)=>{
    let weight = Number(req.body.num1)
    let height = Number(req.body.num2)
    result =weight/(height*height)
    res.send(" your bmi is"+result)

})

app.listen(3000,()=>{
    console.log("server start  ar port: 3000" );
})
