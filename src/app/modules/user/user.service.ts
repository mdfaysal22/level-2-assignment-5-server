import { IUser } from "./user.interface";
import { User } from "./user.model";

const createUser = async(user: IUser) : Promise<IUser | null> => {
    const createUser = await User.create(user);
    if(!createUser){
        return null;
    }else{
        return createUser
    }
};

const getUsers = async() : Promise<IUser[] | null> => {
    const users = await User.find({});
    if(!users){
        throw new Error("No Users Found");
        return null
    }else{
        return users
    }
}

export default {
    createUser,
    getUsers,
}