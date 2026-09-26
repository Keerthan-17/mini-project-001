import "dotenv/config";

const DATABASE_URL = process.env.DATABASE_URL;
const JWT_SECRET = process.env.JWT_SECRET;
const FRONTEND_URL = process.env.FRONTEND_URL;

if (!DATABASE_URL) {
  throw new Error("DATABASE_URL is not defined");
}

if (!JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined");
}

if (!FRONTEND_URL) {
  throw new Error("FRONTEND_URL is not defined");
}

export const env = {
  DATABASE_URL,
  JWT_SECRET,
  FRONTEND_URL,
};
