import { z } from "zod";
export const signupInput = z.object({
   username: z.string(),
   password: z.string(),
});

export const loginInput = z.object({
   username: z.string(),
   password: z.string(),
});

export const todoInput = z.object({
   title: z.string(),
   description: z.string(),
});

export type SignupParams = z.infer<typeof signupInput>;
export type LoginParams = z.infer<typeof loginInput>;
export type TodoParams = z.infer<typeof todoInput>;
