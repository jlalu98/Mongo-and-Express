"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var body_parser_1 = __importDefault(require("body-parser"));
var express_1 = __importDefault(require("express"));
var dotenv = __importStar(require("dotenv"));
dotenv.config({ path: __dirname + '/.env' });
//import { ppid, title } from "node:process";
var port = 3000;
var app = express_1.default();
var mongoose = require('mongoose');
var Book = require('./book');
var books = require('./routes/books');
var dbURI = "mongodb+srv://" + process.env.db_user + ":" + process.env.db_password + "@cluster0.r2jbq.mongodb.net/" + process.env.db_name + "?retryWrites=true&w=majority";
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(function (_result) { return console.log('Connected Successfully to DataBase'); })
    .catch(function (err) { return console.log(err); });
app.use("/books", books);
app.use(body_parser_1.default.json());
// app.get("/books",(_req,res)=>{
// Book.find()
//     .then((result: any)=>{
//         res.send(result);
//     })
//     .catch((error: Error)=>console.log(error))
// })
// app.get("/books/:id",(req,res)=>{
//     const id= req.params.id;
//     //Book.findById('60768abb5d8c4f437c22a18b')
//     Book.findById(id)
//     .then((result: any)=>{
//         res.send(result);
//     })
//     .catch((error: Error)=>console.log(error))
// })
// app.delete("/books/:id",(req,res)=>{
//    const id= req.params.id;
//     Book.deleteOne({_id:id})
//     .then(()=>{
//     res.status(200).json({
//         message:'Books deleted'
//     })
// })
//     .catch((error:Error)=>console.log(error))
// })
// app.post('/books',(req,res)=>{
//     let book=new Book(req.body);
//     book.save();
//     res.send(book);
// });
// app.put('/books/:id',(req,res)=>{
//     const book=new Book({
//         _id:req.params.id,
//         title:req.body.title,
//         author:req.body.author,
//         price:req.body.price,
//         rating:req.body.rating,
//     });
//     Book.update({_id:req.params.id},book)
//     .then(()=>{
//         res.status(201).json({
//             message:'Book updated successfully'
//         })
//     }).catch((error:Error)=>console.log(error))
// })
// app
//     .route("/books")
//     .get((_req,res)=>{
//         Book.find()
//             .then((result: any)=>{
//                 res.send(result);
//             })
//             .catch((error: Error)=>console.log(error))
//         })
//     .post((req,res)=>{
//         let book=new Book(req.body);
//         book.save();
//         res.send(book); 
//     });
// app
//     .route('/books/:id')
//     .get((req,res)=>{
//         const id= req.params.id;
//         //Book.findById('60768abb5d8c4f437c22a18b')
//         Book.findById(id)
//         .then((result: any)=>{
//             res.send(result);
//         })
//         .catch((error: Error)=>console.log(error))
//     })
//     .delete((req,res)=>{
//         const id= req.params.id;
//          Book.deleteOne({_id:id})
//          .then(()=>{
//          res.status(200).json({
//              message:'Books deleted'
//          })
//      })
//          .catch((error:Error)=>console.log(error))
//      })
//      .put((req,res)=>{
//         const book=new Book({
//             _id:req.params.id,
//             title:req.body.title,
//             author:req.body.author,
//             price:req.body.price,
//             rating:req.body.rating,
//         });
//         Book.update({_id:req.params.id},book)
//         .then(()=>{
//             res.status(201).json({
//                 message:'Book updated successfully'
//             })
//         }).catch((error:Error)=>console.log(error))
//     })
app.listen(port, function () {
    console.log("Server Started at port " + port);
});
