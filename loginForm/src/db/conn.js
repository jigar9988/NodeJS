const express = require('express');
const mongoose = require('mongoose');
const validator = require("validator");

mongoose.connect("mongodb://localhost:27017/registerForm", { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    .then(() => console.log("connected successfully"))
    .catch((err) => console.log(err));

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Email id already present"],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid Email")
            }
        }
    },
    phone: {
        type: Number,
        unique: true,
        required: true,
        min: 10
    },
    pass1: {
        type:String,
        validate(value) {
            if (!validator.isStrongPassword(value)) {
                throw new Error("Invalid Email")
            }
        },
        required: true,
    },
    pass2: {
        type:String,
        validate(value) {
            if (!validator.isStrongPassword(value)) {
                throw new Error("Invalid Email")
            }
        },
        required: true,
    },
});

const User = new mongoose.model("Student", UserSchema);

module.exports = User;