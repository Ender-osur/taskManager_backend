import dotenv from "dotenv";
import { Secret } from "jsonwebtoken";

dotenv.config({path: "variables.env"});

export const SECRET_KEY: Secret = String(process.env.SECRET_KEY);
export const PORT: number = Number(process.env.PORT);
export const MONGODB_URI: string = String(process.env.MONGODB_URI);