"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        required: true
    }
}, {
    timestamps: true // add createdAt and updatedAt fields automatically with every document creation/update
});
exports.User = (0, mongoose_1.model)("user", userSchema);
