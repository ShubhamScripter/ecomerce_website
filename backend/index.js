const express=require('express');
const path=require('path');
const mongoose=require('mongoose');
const multer=require('multer');
const port=4000;
const cors=require('cors');
const app=express();
app.use(express.json());
app.use(cors());
const Product=require('./Schema/ProductSchema')
const password = encodeURIComponent("Shubham@860"); // i am encoding mogodb atlas password because my password has special charcters like "@"

mongoose.connect(`mongodb+srv://shubhamgoyal20243:${password}@cluster0.y1zyrhs.mongodb.net/e-commerce`)
.then(()=>{console.log('database is succesfully connected');})
.catch((err)=>{console.log(`${err} is present`);})




app.use('/images',express.static('upload/images'));

app.get('/',(req,res)=>{
    console.log(req.user);
    res.send('my express is ready to handle request');
});

const mystorage=multer.diskStorage({
    destination:'./upload/images',
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
});

const upload=multer({storage:mystorage});

app.post('/upload',upload.single('product'),(req,res)=>
{
    // take information of uploaded file console.log(req.file);
    res.json({
        success:1,
    image_url:`http://localhost:${port}/images/${req.file.filename}`
    })
});

app.post('/addproduct',async(req,res)=>
{
    console.log("yes");
        let products=await Product.find({});
        let id;
        if(products.length>0)
        {
            let last_product_array=products.slice(-1);
            let last_product=last_product_array[0];
            id=last_product.id+1;
        }
        else
        {
            id=1;
        }


      const product=new Product(
                {
                    id:id,
                    name:req.body.name,
                    image:req.body.image,
                    category:req.body.category,
                    new_price:req.body.new_price,
                    old_price:req.body.old_price,
                });

    
    
    await product.save();
    
    console.log("product save");

    res.json({success:1,"mynew product":product});
  
});

app.post('/removeproduct',async(req,res)=>
{
    await Product.findOneAndDelete({id:req.body.id});
    console.log("removed");
    res.json({success:true,name:req.body.name});
})

//getting all products
app.get('/allproducts',async(req,res)=>
{
    
    const products=await Product.find({});
    console.log("all products got succesfully from database ");
    res.send(products);

})





app.listen(port,(err)=>{
    if(err)
    {
         console.log('error is present: ',err);
    }
    else
    {
        console.log(`server is running at port : ${port}`); 
    }
})