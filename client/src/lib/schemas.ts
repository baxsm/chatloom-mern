import * as z from "zod";

const PASSWORD = {
  MIN: 8,
  MAX: 30,
};

const NAME = {
  MIN: 1,
  MAX: 30,
};

const USERNAME = {
  MIN: 3,
  MAX: 8
}

export const loginSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(PASSWORD.MIN, "Password is too short")
    .max(PASSWORD.MAX, "Password is too long"),
});

export const registerSchema = z
  .object({
    name: z.string().min(NAME.MIN).max(NAME.MAX),
    email: z.string().email(),
    password: z
      .string()
      .min(PASSWORD.MIN, "Password is too short")
      .max(PASSWORD.MAX, "Password is too long"),
    confirmPassword: z
      .string()
      .min(PASSWORD.MIN, "Password is too short")
      .max(PASSWORD.MAX, "Password is too long"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const recoverSchema = z.object({
  email: z.string().email("Invalid email"),
});

export const onboardingSchema = z.object({
  username: z.string().min(USERNAME.MIN).max(USERNAME.MAX),
})
