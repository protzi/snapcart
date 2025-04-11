export class User {
    constructor(
        public id: string,
        public username: string,
        public passwordHash: string,
        public email: string
    ) {}

    validatePassword(password: string): boolean {
        // Implement password validation logic
        return true; // Placeholder
    }
}