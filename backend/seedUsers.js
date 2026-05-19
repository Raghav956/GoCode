require("dotenv").config();

const mongoose = require("mongoose");

const bcrypt = require("bcryptjs");

const User = require("./models/User");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

const users = [
  {
    name: "Admin User",

    email: "admin@gocode.com",

    password: "admin123",
  },

  {
    name: "John Doe",

    email: "john@gocode.com",

    password: "john123",
  },

  {
    name: "Alice Smith",

    email: "alice@gocode.com",

    password: "alice123",
  },

  {
    name: "Bob Wilson",

    email: "bob@gocode.com",

    password: "bob123",
  },
];

async function seedUsers() {

  try {

    await User.deleteMany();

    const hashedUsers = [];

    for (let i = 0; i < users.length; i++) {

      const hashedPassword =
        await bcrypt.hash(
          users[i].password,
          10
        );

      hashedUsers.push({
        name: users[i].name,
        email: users[i].email,
        password: hashedPassword,
      });
    }

    await User.insertMany(
      hashedUsers
    );

    console.log(
      "Users inserted successfully"
    );

    process.exit();

  } catch (err) {

    console.log(err);

    process.exit(1);
  }
}

seedUsers();