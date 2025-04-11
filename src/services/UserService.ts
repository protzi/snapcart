import { User } from "../models/User";
import { getRepository } from "typeorm";
import bcrypt from "bcrypt";

export class UserService {
    async register(username: string, password: string) {
        const userRepository = getRepository(User);
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = userRepository.create({ username, password: hashedPassword });
        await userRepository.save(user);
        return user;
    }

    async login(username: string, password: string) {
        const userRepository = getRepository(User);
        const user = await userRepository.findOne({ where: { username } });
        if (user && await bcrypt.compare(password, user.password)) {
            return user;
        }
        throw new Error("Invalid credentials");
    }
}