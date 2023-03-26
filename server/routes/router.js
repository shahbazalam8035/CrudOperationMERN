const express = require("express");
const router = express.Router();
const users = require("../models/userSchema");


                                                                 // register user
router.post("/register",async(req,res)=>{
    // console.log(req.body);

    const{name,email,age,mobile,work,address,desc}=req.body;
    if(!name || !email || !age || !mobile || !work || !address || !desc){
        res.status(404).json("plz fill all data")
    }

    try {
        const preuser = await users.findOne({email:email})
        console.log(preuser);

        if(preuser){
            res.status(404).json("email allready exists......!")
        }else{
            const adduser = new users({
                name,email,age,mobile,work,address,desc
            });
            await adduser.save();
            res.status(201).json(adduser);
            console.log(adduser);
        }
    } catch (error) {
        res.status(404).json(error)
    }
})
                                                    // get userdata
router.get("/getdata",async(req,res)=>{
    try {
        const getData = await users.find();
        res.status(201).json(getData);
        console.log(getData);
    } catch (error) {
        res.status(404).json(error);
    }

})

                                                    // get individual user
router.get("/getuser/:id",async(req,res)=>{

    try {
        const {id} =req.params;
        const getIndividualUser = await users.findById({_id:id})
        res.status(201).json(getIndividualUser)
    } catch (error) {
        res.status(422).json(error)
    }
    
})


                                                    // update individual user(modify)

 router.patch("/updateuser/:id",async(req,res)=>{
try {
    const {id}= req.params
    const updateuser= await users.findByIdAndUpdate
    (id,req.body,{
        new:true
    })
    res.status(201).json(updateuser)
} catch (error) {
    res.status(404).json(error)
}  
})  

                                                 // delete inndividual user
router.delete("/deleteuser/:id",async(req,res)=>{
try {
    const {id} = req.params;
    const deleteUser = await users.findByIdAndDelete({_id:id});
    res.status(201).json(deleteUser)
} catch (error) {
    res.status(404).json(error)
}
})

module.exports = router;