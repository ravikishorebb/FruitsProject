
const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB", { useNewUrlParser: true });

const fruitSchema = new mongoose.Schema ({
  name: String,
  rating: Number,
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
  name: "Apple",
  rating: 7,
  review: "Apples are beautiful"
});

//fruit.save();

const personSchema = new mongoose.Schema ({
  name: String,
  age: Number,
});

const Person = mongoose.model("Person", personSchema);

const person = new Person ({
  name: "King Kong",
  age: 21
});

person.save();

const kiwi = new Fruit ({
  name: "Kiwi",
  rating: 10,
  review: "Very hairy"
});

const orange = new Fruit ({
  name: "orange",
  rating:9,
  review: "Same as color"
});

const banana = new Fruit ({
  name: "banana",
  rating:6,
  review: "healthy the best"
});

// Fruit.insertMany([kiwi, orange, banana], function(err){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully saved all the fruits")
//   }
// })

Fruit.find(function(err, fruits){
  if (err){
    console.log(err);
  } else {
  //  console.log(fruits);
  mongoose.collection.close();

    fruits.forEach(function(fruit) {
      console.log(fruit.name);
    })
  }


});
