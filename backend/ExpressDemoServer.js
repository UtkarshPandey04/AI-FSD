const express=require('express');
const app=express();
app.get("/",(req,res)=>{
    res.send("Hello World! This is our first expresss server");
});
app.get("/about",(req,res)=>{
    res.send("This is about page");
});
app.post("/add",(req,res)=>{
    res.send("This is post command");
});
app.delete("/update",(req,res)=>{
    app.send("This is delete command");
});
app.put("/del",(req,res)=>{
    app.send("Indo is send");
});
app.listen(3000,()=>{
    console.log(`Server is running on http://localhost:3000`);
});
app.get("/files",(req,res)=>{
    res.send("This is files page");
});
app.get("/jfiles",(req,res)=>{
    res.json(Path.join(__dirname,"files"));
});
app.get("/contact",(req,res)=>{
    res.json({
        name:"John Doe",
        email:"john.doe@example.com",
})});