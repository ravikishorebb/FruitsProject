
const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB", { useNewUrlParser: true });

// const fruitSchema = new mongoose.Schema ({
//   name: {
//     type: String,
//     required: [true, "Mandotaory Name"]
//   },
//   rating: {
//     type: Number,
//     min: 1,
//     max: 10
//     },
//   review: String
// });
//
// const Fruit = mongoose.model("Fruit", fruitSchema);




// const Apple = new Fruit ({
//   name: "Apple",
//   rating: 6,
//   review: "Blue are Bad"
// });
//
// const Kiwi = new Fruit ({
//   name: "Kiwi",
//   rating: 10,
//   review: "Very hairy"
// });
//
// const Orange = new Fruit ({
//   name: "Orange",
//   rating:9,
//   review: "Same as color"
// });
//
// const Banana = new Fruit ({
//   name: "Banana",
//   rating:6,
//   review: "healthy the best"
// });

// To insert single record
//Banana.save();

// Fruit.insertMany([Apple, Kiwi, Orange, Banana], function(err){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully saved all the fruits")
//   }
// })

// Fruit.find(function(err, fruits){
//   console.log("Inside Find 1");
//   if (err){
//     console.log(err);
//   } else {
// //  mongoose.connection.close();
//   console.log(fruits);
//   }
// });


// Fruit.find(function(err, fruits){
//   console.log("First Find");
//   if (err){
//     console.log(err);
//   } else {
//     fruits.forEach(function(fruit) {
//       console.log(fruit.name);
//       mongoose.connection.close();
//     })
//   }
// });

// Fruit.updateOne({ Name: "Apple"},  {name: "Ravi"},  function(err){
//   console.log("Inside Update");
//     if (err){
//       console.log(err);
//     } else {
//       console.log("Updated Sucessfully");
//     //  mongoose.connection.close();
//     }
// });


// Fruit.deleteOne({name: "Ravi"}, function(err){
//   console.log("Inside Delete");
//
//   if(err){
//     console.log(err);
//   } else {
//     console.log("Delete Done");
//   }
// })


// Fruit.find(function(err, fruits){
//   console.log("Inside Find 2");
//   if (err){
//     console.log(err);
//   } else {
//
// //  mongoose.connection.close();
//   console.log(fruits);
//
//     fruits.forEach(function(fruit) {
//       console.log(fruit.name);
//     })
//   }
// });


// Fruit.find(function(err, fruits){
//   console.log("Final Find");
//   if (err){
//     console.log(err);
//   } else {
//     fruits.forEach(function(fruit) {
//       console.log(fruit.name);
//       mongoose.connection.close();
//     })
//   }
// });


const personSchema = new mongoose.Schema ({
  name: String,
  age: Number
});

const Person = mongoose.model("Person", personSchema);

// const person = new Person ({
//   name: "King Kong",
//   age: 21
// });
//
// person.save();

// Person.find(function(err, poeple){
//   console.log("Final Find");
//   if (err){
//     console.log(err);
//   } else {
//     poeple.forEach(function(poeple) {
//       console.log(poeple.name);
//       //mongoose.connection.close();
//     })
//   }
// });

Person.deleteMany({name: "King Kong"}), function(err){
  if (err){
    console.log(err);
  }else {
    console.log("deleted all");
     mongoose.connection.close();
  }
}
