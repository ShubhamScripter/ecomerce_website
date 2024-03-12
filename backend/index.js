const express=require('express');
const path=require('path');
const mongoose=require('mongoose');
const multer=require('multer');
const port=4000;
const cors=require('cors');
const app=express();
app.use(express.json());
app.use(cors());
const Product=require('./Schema/ProductSchema');
const User=require('./Schema/UserSchema');
const password = encodeURIComponent("Shubham@860"); // i am encoding mogodb atlas password because my password has special charcters like "@"
const jwt=require('jsonwebtoken');

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
    console.log("all products got succesfully from database ");
    const products=await Product.find({});
    console.log(products);
    res.send(products);
})



//creating app for registering the user
app.post('/signup',async(req,res)=>
{
    const check=await User.findOne({email:req.body.email});
    if(check)
    {
        return res.json({success:false,errors:"user already existing with same email"});
    }
    let cart={};
    for(let i=0;i<300;i++)
    cart[i]=0;

    const user=new User({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password,
        cartData:cart
    })

    await user.save();

    const data={
        user:
        {
            id:user.id
        }
    }

    const token=jwt.sign(data,'secret_ecom');

    res.json({success:true,token});

    
})

//creating app for registering the user
app.post('/login',async(req,res)=>
{
    const user=await User.findOne({email:req.body.email});
    if(user)
    {
        if(req.body.password==user.password)
        {
            const data={
                user:
                {
                    id:user.id
                }
            }
            const token=jwt.sign(data,'secret_ecom');
            res.json({success:true,token,msg:"login succesfully"});
        }
        else

        return res.json({success:false,errors:"Wrong password"});
    }
   else
   {
    return res.json({success:false,errors:"email not found"});
   }
   
})

//creating end point for new collections

app.get('/newcollections',async(req,res)=>{
    let products=await Product.find({});
    let newcollection=products.slice(1).slice(-8);
    console.log("new collections fetched");
   res.send(newcollection);
})

// end points for getting poular products

app.get('/popularinwomen',async(req,res)=>{
    let products=await Product.find({category:"women"});
    let popular_in_women=products.slice(0,4);
   res.send(popular_in_women);
});

//creating middleware to fetch user of a item of cart

const fetchuser=async(req,res,next)=>{
    const token=req.header('auth-token');
    if(!token)
    {
res.statuse(401).send({"errors":"please authenticate using valid token"});
    }
    else
    {
        try{
            const data=jwt.verify(token,'secret_ecom');
            req.user=data.user;
            next();
        }
        catch(error)
        {
            res.status(401).send({errors:"please authenticate using a valid token"});
        }
    }

}

app.post('/addtocart',fetchuser,async(req,res)=>{
   
    let userData=await User.findOne({_id:req.user.id});
    
    userData.cartData[req.body.itemId]+=1;
    const updated_user=await User.findByIdAndUpdate({_id:req.user.id},{cartData:userData?.cartData});
    console.log(updated_user,"USER")
    res.send("Added");
    // console.log("hidfjnsdfjdslkfnsdfjoij");
});
app.post('/removefromcart',fetchuser,async(req,res)=>{
   
    let userData=await User.findOne({_id:req.user.id});
    if(userData.cartData[req.body.itemId]>0)
    userData.cartData[req.body.itemId]-=1;
    const updated_user=await User.findByIdAndUpdate({_id:req.user.id},{cartData:userData?.cartData});
    console.log(updated_user,"USER")
    res.send("Removed");
    // console.log("hidfjnsdfjdslkfnsdfjoij");
});

//creating for maintaing cart icon counting of cartitems
app.post('/getcart',fetchuser,async(req,res)=>{
    console.log("get Cart called");
    let userData=await User.findOne({_id:req.user.id});
    res.json(userData.cartData);
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