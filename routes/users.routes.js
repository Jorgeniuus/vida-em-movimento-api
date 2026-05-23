const express = require("express");

const router = express.Router();

const {
  createOrUpdateUser,
  getUserByEmail,
  unsubscribeUser,
} = require("../controllers/users.controller");

router.post("/", createOrUpdateUser);

router.get("/:email", getUserByEmail);

router.patch('/unsubscribe/:email', unsubscribeUser);

module.exports = router;