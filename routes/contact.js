const express=require('express')
const contactRouter=express.Router()
const {GetContact,AddContact,UpdateContact,DeletContact}=require('../controllers/contact')

contactRouter.get('/', GetContact)

contactRouter.post('/add',AddContact)
contactRouter.put('/:id',UpdateContact)

contactRouter.delete('/:id',DeletContact)

module.exports=contactRouter