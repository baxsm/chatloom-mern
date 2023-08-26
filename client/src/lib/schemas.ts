import * as z from "zod";

const PASSWORD = {
  MIN: 8,
  MAX: 20,
};

export const loginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z
    .string()
    .min(PASSWORD.MIN, "Password is too short")
    .max(PASSWORD.MAX, "Password is too long"),
});
