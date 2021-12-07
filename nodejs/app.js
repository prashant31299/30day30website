express = require("express")
app =express();

app.get("/",(req,res)=>{
    res.send("hallow wd dsafadaorld ");
});
app.get("/contact", (req,res)=>{
    res.send("this is a my contact page")
})
app.get("/about", (req,res)=>{
    res.send("<h1>hey im prashant chavan im web devloper</h1>")
})
app.get("/work", (req,res)=>{
    res.send("<h1>now im homeless</h1>")
})
app.listen(3000,()=>{
    console.log("server  gsstarted at port 8000");
}); 