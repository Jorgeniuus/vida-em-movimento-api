const express = require("express");

const router = express.Router();

const {
  createOrUpdateUser,
  getUserByEmail,
} = require("../controllers/users.controller");

router.post("/", createOrUpdateUser);

router.get("/:email", getUserByEmail);

module.exports = router;