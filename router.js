var db=require('./database');
var express=require('express');
var app=express();
const bodyParser = require('body-parser');
var urlencodedParser=bodyParser.urlencoded({extended: false});

var router=express.Router();
router.get('/select',async (req,res,next)=>{
try{
var result=await db.all();
res.send(result);
}catch(e){
res.send(e.message);

}

});
app.use(bodyParser.json());
router.post('/insert',async (req,res,next)=>{
var name=req.body;
console.log(name);

try{
var result=await db.insert(name);
res.send(result);
}catch(e){
res.send(e.message);

}

})
router.put('/update',async (req,res,next)=>{
console.log(req.body);

const data={
id:req.body.employeeid,
name:req.body.employeename
}


try{
var result=await db.update(data);
res.send(result);
}catch(e){
res.send(e.message);

}

})
router.delete('/delete',async (req,res,next)=>{
var id=req.body.employeeid;
console.log(id);
try{
var result=await db.delete(id);
res.send(result);
}catch(e){
res.send(e.message);

}

})



module.exports=router;