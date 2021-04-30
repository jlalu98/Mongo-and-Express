import bodyParser from "body-parser";
import express from "express";
const Book= require('../book');
let router=express.Router();
router.use(bodyParser.json());
 router
    .route("")
    .get((req,res)=>{
        Book.find()
            .then((result: any)=>{
                res.send(result);
            })
            .catch((error: Error)=>console.log(error))
        })
    .post((req,res)=>{
        let book=new Book(req.body);
        book.save();
        res.send(book); 
    });
router
    .route('/:id')
    .get((req,res)=>{
        const id= req.params.id;
        Book.findById(id)
        .then((result: any)=>{
            res.send(result);
        })
        .catch((error: Error)=>console.log(error))
    })
    .delete((req,res)=>{
        const id= req.params.id;
         Book.deleteOne({_id:id})
         .then(()=>{
         res.status(200).json({
             message:'Books deleted'
         })
     })
         .catch((error:Error)=>console.log(error))
     })
     .put((req,res)=>{
        const book=new Book({
            _id:req.params.id,
            title:req.body.title,
            author:req.body.author,
            price:req.body.price,
            rating:req.body.rating,
        });
        Book.update({_id:req.params.id},book)
        .then(()=>{
            res.status(201).json({
                message:'Book updated successfully'
            })
        }).catch((error:Error)=>console.log(error))
    
    })


 module.exports=router;