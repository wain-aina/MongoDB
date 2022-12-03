const mongoose = require('mongoose');

mongoose.connect("mongodb://0.0.0.0:27017/fruitsDB", {useNewUrlParser: true});

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "No name specified"]
    },
    rating: {
        type:Number,
        min:1,
        max:10
    },
    review: String
});

const personSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    age: Number,
    favoriteFruit: fruitSchema
});

const Fruit = mongoose.model("Fruit", fruitSchema);
const Person = mongoose.model("Person", personSchema);

const apricot = new Fruit({
    name:"Apricot",
    score: 8,
    review: "one of a kind"
})

apricot.save();

// const apple = new Fruit ({
//     name:"apple",
//     rating:7,
//     review:"Good"
// });
//
// const kiwi = new Fruit({
//     name:"Pineapple",
//     score: 10,
//     review: "Amazing"
// });
//
// const orange = new Fruit({
//     name:"Orange",
//     score: 6,
//     review: "Wont argue"
// });

// Fruit.insertMany([apple, kiwi, orange], function(err){
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Success");
//     }
// });

// Fruit.find(function(err, fruits){
//     if (err) {
//         console.log(err);
//     } else {
//
//         mongoose.connection.close();
//
//         fruits.forEach(function(fruit){
//             console.log(fruit.name);
//         });
//     }
// });

// Fruit.updateOne({_id:"635f6a6dad4681609f1c0927"}, {name:"Custard"}, function(err){
//    if (err){
//        console.log(err);
//    } else {
//        console.log("Successfully updated");
//    }
// });

// Fruit.deleteOne({name:"Custard"}, function(err){
//     if (err) {
//         console.log(err);
//     } else {
//         consoel.log("Successfully deleted");
//     }
// });

const person = new Person({
    name:"Snow",
    age:19,
    favoriteFruit: apricot
})

person.save()
