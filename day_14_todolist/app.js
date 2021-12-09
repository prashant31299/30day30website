let express =require("express")
let app=express()

app.get("/",(req,res)=>{
  
    var today = new Date()
    var currentdat =today.getDay()
    var day =""
    if (currentdat == 6 || currentdat ==0){
        day ="weakend"
        console.log(day);

    }else{
        day ="weeday let work"
        console.log(day);
    }

    res.render("index",{day:day})
})
app.listen(3000,()=>{
    console.log("server start at 3000");
})