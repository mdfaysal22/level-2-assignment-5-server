import { Model, Schema, model } from "mongoose";
import { IUser } from "./user.interface";

const userSchema = new Schema<IUser>({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique:true, // to ensure that each account has a unique email address
        lowercase: true,// convert all emails into lower case before saving them in the database
        trim: true,// remove any leading or trailing white spaces when storing an email  
        required: true
    }
}, {
    timestamps: true// add createdAt and updatedAt fields automatically with every document creation/update
});

export const User : Model<IUser> = model<IUser>("user", userSchema);