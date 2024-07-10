import { IAuth } from "../Domain/IAuth";
import { IUser } from "../Domain/IUser";
import { userModel } from "../Models/userModel";
import { encrypt, verify } from "../Utils/password.handle";
import { generateToken } from "../Utils/jwt.handle";

const registerNewUser = async (user: IUser) => {
    const userExists = await userModel.findOne({email: user.email});
    const checkUserExists: boolean = userExists ? true : false;
    if (checkUserExists) return "User Already exists";
    const passwordHashed = await encrypt(user.password);
    const createNewUserResp = await userModel.create(
        {
            email: user.email, 
            password: passwordHashed, 
            name: user.name
        }
    );
    return createNewUserResp;
}

const  loginUser = async (userAuth: IAuth) => {
    const userExists = await userModel.findOne({email: userAuth.email});
    const checkUserExists: boolean = userExists ? true : false;
    if (!checkUserExists) return "User does no exists";
    const hashedPassword: string = userExists!.password;
    const isCorrect: boolean = await verify(userAuth.password, hashedPassword);
    if (!isCorrect) return "Password is Incorrect";
    const token = generateToken(userExists!.email);
    const data = {
        token,
        user: userExists
    }
    return data;
}

export { registerNewUser, loginUser }