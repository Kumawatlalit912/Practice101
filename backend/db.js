const mongoose=require('mongoose');

const connectDb=()=>{
    try{
        const conn=mongoose.connect('mongodb+srv://product:product@cluster0.ywhm9fa.mongodb.net/?retryWrites=true&w=majority',{
            useUnifiedTopology:true,
            useNewUrlParser:true,
        })
        console.log(`mongodb connected successfully:${conn.connection}`);
    }catch(e){
        console.log("mongo error",e); 
    }
}



module.exports=connectDb;