
let express = require("express")
let bodyparser = require("body-parser")
let app = express()
app.set('view engine', 'ejs');


  var items=["5451",];
app.use(bodyparser.urlencoded({extended:true}))

app.get("/", (req, res) => {


    var options = { 
        weekday: 'long', 
        year: 'numeric',
        month: 'long',
        day: 'numeric' };
    var d = new Date();
    let day = d.toLocaleDateString("en-US", options)

    res.render("index", {
        day: day,newlistiteam:items })
})

app.post("/",(req,res)=>{
   let item= req.body.newitem;
    items.push(item) 
    res.redirect("/"); // we redirect this post request to get and and new list in our 
})
 
app.listen(3000, () => {
    console.log("server start at 3000");
})