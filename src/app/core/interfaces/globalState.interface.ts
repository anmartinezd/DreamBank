import { UserModel } from "../models/user.model";

export interface GlobalStateInterface{
    token: string;
    userId: number;
}