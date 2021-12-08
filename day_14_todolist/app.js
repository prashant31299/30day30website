let express =require("express")
let app=express()

app.get("/",(req,res)=>{
    const d = new Day()
    const curr=d.getDay();
    if(curr ==0){
        res.send("sundat")

    }else{
        res.send("work")
    }
})
app.listen(3000,()=>{
    console.log("server start at 3000");
})