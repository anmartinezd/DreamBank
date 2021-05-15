import { User } from "./user";

export interface GlobalState{
    user: User;
    token: string;
}