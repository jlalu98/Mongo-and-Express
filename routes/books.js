"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var body_parser_1 = __importDefault(require("body-parser"));
var express_1 = __importDefault(require("express"));
var Book = require('../book');
var router = express_1.default.Router();
router.use(body_parser_1.default.json());
router
    .route("")
    .get(function (req, res) {
    Book.find()
        .then(function (result) {
        res.send(result);
    })
        .catch(function (error) { return console.log(error); });
})
    .post(function (req, res) {
    var book = new Book(req.body);
    book.save();
    res.send(book);
});
router
    .route('/:id')
    .get(function (req, res) {
    var id = req.params.id;
    Book.findById(id)
        .then(function (result) {
        res.send(result);
    })
        .catch(function (error) { return console.log(error); });
})
    .delete(function (req, res) {
    var id = req.params.id;
    Book.deleteOne({ _id: id })
        .then(function () {
        res.status(200).json({
            message: 'Books deleted'
        });
    })
        .catch(function (error) { return console.log(error); });
})
    .put(function (req, res) {
    var book = new Book({
        _id: req.params.id,
        title: req.body.title,
        author: req.body.author,
        price: req.body.price,
        rating: req.body.rating,
    });
    Book.update({ _id: req.params.id }, book)
        .then(function () {
        res.status(201).json({
            message: 'Book updated successfully'
        });
    }).catch(function (error) { return console.log(error); });
});
module.exports = router;
