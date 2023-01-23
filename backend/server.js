const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const dotenv=require('dotenv');
const app=express();
const cors=require('cors');
const jwt=require('jsonwebtoken');
const generateToken=require('./generateToken');
app.use(cors());

const connectDb=require('./db');
dotenv.config();
// const PORT=process.env.PORT || 5000;
app.use(bodyParser.json());
app.listen(3000,console.log(`connected successfully on port 3000`));
connectDb();

const Products=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:String,
    category:String,
    imageUrl:String,
    inStock:String,
    price:Number,
    description:String,
    brand:String,
    colors:[],
    sizes:[],
    rating:Number,
})
const newProduct=mongoose.model('newProduct',Products);
// app.get('/',(req,res)=>{
//     res.json({messsage:"home"});
// })

app.get('/products',async(req,res)=>{
        await newProduct.find({}).then((pro)=>{
            res.json(pro);
        }).catch((e)=>{
            res.json({message:"there are no products"});
        })
})

app.post('/products',(req,res)=>{
    const product=new newProduct({
        _id:new mongoose.Types.ObjectId,
        name:req.body.name,
        category:req.body.category,
        imageUrl:req.body.imageUrl,
        inStock:req.body.inStock,
        price:req.body.price,
        description:req.body.description,
        brand:req.body.brand,
        colors:req.body.colors,
        sizes:req.body.sizes,
        rating:req.body.rating,
});
if(product){
    product.save().then((pro)=>{
        res.json(pro)});
}
else {
    res.json({message:'error'});
}

});
app.delete('/products/:id',(req,res)=>{ 
    newProduct.findByIdAndRemove({_id:req.params.id}).then(()=>{
        res.json({message:"product deleted successfully"});
    }).catch((err)=>{
        res.status(400).json({message:"error deleting product"});
    })




});


app.put('/products/:id',(req,res)=>{
    newProduct.findOneAndUpdate({_id:req.params.id},{$set:{
        name:req.body.name,
        category:req.body.category,
        imageUrl:req.body.imageUrl,
        inStock:req.body.inStock,
        price:req.body.price,
        description:req.body.description,
        brand:req.body.brand,
        colors:req.body.colors,
        sizes:req.body.sizes,
        rating:req.body.rating,
        }},(err,docs)=>{
            if(err){
                res.json({message:"some error occurred while updating",err});
            }
            else return res.json(docs);
        })
    });



