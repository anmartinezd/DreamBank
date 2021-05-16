export class LoginModel{
    public id: number;
    public password: string;

    constructor({id,password}){
        this.id = id;
        this.password = password;
    }
}