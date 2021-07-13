const express= require("express");
const app= express();
const path= require('path');
const hbs= require('hbs');
const cors= require('cors');
const port= process.env.PORT || 7000;



const view_path= path.join(__dirname,"./templates/views");
const partials_path= path.join(__dirname,"./templates/partials");
console.log(view_path);
console.log(partials_path);

app.set('view engine', 'hbs');
app.set('views',view_path);
hbs.registerPartials(partials_path);



const static_Path= path.join(__dirname, "./public");
console.log(static_Path);
app.use(express.static(static_Path));

app.use(function(req,res,next) {
    res.header("Access-Control-Allow-Origin","*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-width, Content-Type, Accept, Authorization"
    );
    res.header('Access-Control-Allow-Methods', 'GET, PUT, PATCH,POST, DELETE, OPTIONS');
    next();
});

app.get('',(req,res)=>{
    res.render("index");
})
app.get('/convert',(req,res)=>{
    res.render("convert");
  })
app.get("/read",(req,res)=>{
    res.render('read');
})

app.listen(7000,()=>{
    console.log('listening to port 7000');
});
