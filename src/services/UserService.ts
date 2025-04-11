import { User } from '../models/User';
import { hashPassword, generateToken } from '../utils/helper';

export class UserService {
    private users: User[] = [];

    register(username: string, password: string, email: string): User {
        const passwordHash = hashPassword(password);
        const newUser = new User(this.generateId(), username, passwordHash, email);
        this.users.push(newUser);
        return newUser;
    }

    login(username: string, password: string): string | null {
        const user = this.users.find(u => u.username === username);
        if (user && user.validatePassword(password)) {
            return generateToken(user.id);
        }
        return null;
    }

    public async getUserById(userId: string): Promise<User | null> {
        const user = this.users.find(u => u.id === userId);
        return user || null;
    }

    private generateId(): string {
        return (this.users.length + 1).toString();
    }
}