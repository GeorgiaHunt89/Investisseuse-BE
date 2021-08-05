const db = require("./connection");
const { User } = require("../models");

db.once("open", async () => {
  await User.create({
    firstName: "Pamela",
    lastName: "Washington",
    email: "pamela@testmail.com",
    password: "password12345",
    role: "founder",
  });

  await User.create({
    firstName: "Elijah",
    lastName: "Holt",
    email: "eholt@testmail.com",
    password: "password12345",
    role: "investor",
  });

  console.log("users seeded");

  process.exit();
});
