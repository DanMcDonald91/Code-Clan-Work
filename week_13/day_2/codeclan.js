use codeclan;

db.createCollection("Students", {capped: true, max: 16});

db.students.insert([{
  name: "John",
  favouriteFood: "Quiche"
},
{
  name: "Daniel",
  favouriteFood: "kaysadeeus"
},
{
  name: "Chris",
  favouriteFood: "Jam"

}
]);

db.students.find().pretty();

db.createCollection("Instructors");

db.Instructors.insert([{
  name: "John",
  favouriteFood: "Quiche"
},
{
  name: "Ally",
  favouriteFood: "Caviar"
},
{
  name: "Alan",
  favouriteFood: "Tofu"

}
]);

db.Instructors.find().pretty();
db.collection.explain();

db.dropDatabase();

