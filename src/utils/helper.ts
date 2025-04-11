import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

export function hashPassword(password: string): string {
    return bcrypt.hashSync(password, 10);
}

export function generateToken(userId: string): string {
    return jwt.sign({ id: userId }, 'your_jwt_secret', { expiresIn: '1h' });
}