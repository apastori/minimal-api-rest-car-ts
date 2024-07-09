import { hash, genSalt, compare } from "bcryptjs";

const encrypt = async (password: string): Promise<string> => {
    const salt = await genSalt(10);
    const hashedPassword = await hash(password, salt);
    return hashedPassword;
}

const verify = async (password: string, passwordHashed: string): Promise<boolean> => {
    const isCorrect = compare(password, passwordHashed);
    return isCorrect;
}

export { encrypt, verify }


