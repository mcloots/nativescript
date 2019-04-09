import { Injectable } from "@angular/core";
import { User } from "./user.model";

@Injectable()
export class UserService {

    register(user: User) {
        return new Promise<User>((resolve) => {
            resolve(user);
        });
    }

    login(user: User) {
        return new Promise<User>((resolve) => {
            resolve(user);
        });
    }

    logout() {
        return new Promise<void>((resolve) => {
            resolve();
        });
    }

    resetPassword(email) {
        return new Promise<void>((resolve) => {
            resolve();
        });
    }
}
