const mongoose = require('mongoose');
const userSchema = new mongoose.Schema(
    {
        pseudo : {
            type: String,
            length: [3, 15],
            required: true,
            unique: true,
            trim: true,
        },
        password : {
            type: String,
            length: [8, 30],
            required: true,
        },
        mail : {
            type: String,
            required: true,
            unique: true,
            trim: true,
        }
    }
);
    