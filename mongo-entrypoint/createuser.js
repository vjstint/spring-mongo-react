db.createUser(
   {
     user: "appUser",
     pwd: "xyzabcd123",
     roles: [ "readWrite" ]
   }
);
db.createCollection("students");
db.students.insertOne({ name: "Jon", age: "20" });