import { Interpolation } from '@angular/compiler';
import { UserInterface } from '../interfaces/api-responses/user.interface';

export class UserModel implements UserInterface{
    id: string;
    firstName: string;
    lastName: string;
    lastLogin: string;
    balance: number;
    profilePicture: string;    

    /**
     * creates a user
     */
    constructor(user: UserInterface) {
        this.id = user.id;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.lastLogin = user.lastLogin;
        this.balance = user.balance;
        this.profilePicture = user.profilePicture;
    }


    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }

    getLastLogin(){
        const date = new Date(this.lastLogin);
        const internationalDateFormat = new Intl.DateTimeFormat('en-GB', 
        {
            day:"2-digit",
            month: "2-digit",
            year:"numeric",
            hour: "2-digit", 
            minute: "2-digit", 
            second: "2-digit",
            timeZoneName: "short"
        }).format(date);
        return internationalDateFormat;
    }
}