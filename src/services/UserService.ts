import { User } from '../models/User';

export class UserService {
    private users: User[] = [];

    public addUser(user: User): void {
        this.users.push(user);
    }

    public getUsers(): User[] {
        return this.users;
    }
}