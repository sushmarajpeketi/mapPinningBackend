const UserRouter = require('express').Router();
const User = require("../models/UserModel")
const bcrypt = require("bcrypt")

//register
UserRouter.post("/register", async (req,res)=> {
    const {username,email,password} = req.body;
    if(!username || !email || !password){
        res.status(400).json({message:"All fields are required"})

}
    const hashedPassword =await bcrypt.hash(password,10);

 
    try{
       const NewUser = await User.create({username,email,password: hashedPassword});

       res.status(200).json( NewUser)

    }catch(e){
        res.status(501).json({message:e})

    }
})


//login
UserRouter.post('/login',async(req,res)=>{
    const {username,email,password} = req.body;
    
        const ExistingUser = await User.findOne({username});
        
        if(!ExistingUser){
            res.status(400).send("No username or password found")  ;
            return;
        }
        console.log("existing user is",ExistingUser) 

        valid_password = await bcrypt.compare(password, ExistingUser.password);
        if(!valid_password){
            res.status(400).send("No username or password found");
            return;
        }
         
        res.status(200).send({username:ExistingUser.username,_id:ExistingUser._id})
}

)



UserRouter.get("/",async(req,res)=>{
    
    try{
        const AllUsers = await User.find();
        res.status(200).json( AllUsers)


    }catch(e){
        res.status(501).json({message:e}) 
    }
})

module.exports = {UserRouter}