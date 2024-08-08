import {JWT as BaseJWT} from "next-auth/jwt";
import {
  Profile as BaseProfile,
  Session as BaseSession,
  User as BaseUser,
} from "next-auth";

declare module "next-auth" {
  export interface Profile extends BaseProfile {
    login: string;
    url: string;
  }

  export interface User extends BaseUser {
    username: string;
    url: string;
  }

  export interface Session extends BaseSession {
    accessToken: string;
    user: User;
  }
}

declare module "next-auth/jwt" {
  export interface JWT extends BaseJWT {
    accessToken: string;
    username: string;
    url: string;
  }
}
