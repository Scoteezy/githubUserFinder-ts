import { GithubUser } from "types/user";

export const isGithubUser = (user: any): user is GithubUser => 'id' in user;