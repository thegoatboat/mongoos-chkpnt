const contactSchema =require('../model/contactModel')

exports.GetContact=async(req,res)=>{
    try{
        const contacts =await contactSchema.find()
        res.status(200).send({msg:'the users list : ',contacts})
    }catch(err){
        res.status(500).send('you hqve no user to get')
        console.log(err)
    }
}

exports.AddContact= async(req,res)=>{
    try{
        const newContact= await new contactSchema(req.body)
        newContact.save()
        res.status(200).send({msg:'you add a new contact',newContact})
    }catch(err){
        res.status(500).send('could bot add a user')
    }
}


exports.UpdateContact=async(req,res)=>{
    try{
        const {id} = req.params
        const updateUser = await contactSchema.findByIdAndUpdate(id,{$set:{...req.body}})
        res.status(200).send('your contact is updated')
            }catch(err){
                res.status(500).send('could not delet your contact')
            }
}


exports.DeletContact=async(req,res)=>{
    try{
const {id} = req.params
const deletUser = await contactSchema.findByIdAndDelete(id)
res.status(200).send('your contact is delet')
    }catch(err){
        res.status(500).send('could not delet your contact')
    }
}