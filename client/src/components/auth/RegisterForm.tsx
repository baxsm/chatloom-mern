import { registerSchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import {
  AiOutlineMail,
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiFillLock,
  AiOutlineUser,
} from "react-icons/ai";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";
import { useSignUp } from "@/hooks/auth/useSignUp";

const RegisterForm: FC = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
    },
  });

  const { mutate: signUp, isLoading } = useSignUp();

  const onSubmit = (values: z.infer<typeof registerSchema>) => {
    signUp({
      name: values.name,
      email: values.email,
      password: values.password,
    });
  };

  return (
    <Form {...form}>
      <motion.form
        variants={fadeIn({ direction: "left", type: "tween" })}
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6 mt-4"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center justify-between">
                <FormLabel>Full Name</FormLabel>
                <FormMessage />
              </div>
              <FormControl>
                <div className="relative flex items-center">
                  <AiOutlineUser className="absolute left-4 text-base text-secondary" />
                  <Input
                    placeholder="Full Name"
                    {...field}
                    className="bg-transparent rounded-xl px-12 py-6 focus:ring-2 focus:ring-primary-background"
                  />
                </div>
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center justify-between">
                <FormLabel>Email</FormLabel>
                <FormMessage />
              </div>
              <FormControl>
                <div className="relative flex items-center">
                  <AiOutlineMail className="absolute left-4 text-base text-secondary" />
                  <Input
                    placeholder="Email"
                    {...field}
                    className="bg-transparent rounded-xl px-12 py-6 focus:ring-2 focus:ring-primary-background"
                  />
                </div>
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center justify-between">
                <FormLabel>Password</FormLabel>
                <FormMessage />
              </div>
              <FormControl>
                <div className="relative flex items-center">
                  <AiFillLock className="absolute left-4 text-base text-secondary" />
                  <Input
                    placeholder="**********"
                    type={isPasswordVisible ? "text" : "password"}
                    {...field}
                    className="bg-transparent rounded-xl px-12 py-6 focus:ring-2 focus:ring-primary-background"
                  />
                  <Button
                    onClick={() => setIsPasswordVisible((prev) => !prev)}
                    type="button"
                    className={`absolute right-2 py-0 px-3 rounded-xl`}
                    variant="ghost"
                  >
                    {isPasswordVisible ? (
                      <AiOutlineEye className="text-base" />
                    ) : (
                      <AiOutlineEyeInvisible className="text-base" />
                    )}
                  </Button>
                </div>
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center justify-between">
                <FormLabel>Confirm Password</FormLabel>
                <FormMessage />
              </div>
              <FormControl>
                <div className="relative flex items-center">
                  <AiFillLock className="absolute left-4 text-base text-secondary" />
                  <Input
                    placeholder="**********"
                    type="password"
                    {...field}
                    className="bg-transparent rounded-xl px-12 py-6 focus:ring-2 focus:ring-primary-background"
                  />
                </div>
              </FormControl>
            </FormItem>
          )}
        />
        <Button disabled={isLoading} className="rounded-xl mt-4">
          {isLoading ? (
            <>
              <Loader2 className="text-primary w-5 h-5 animate-spin mr-2" />
              Creating your account
            </>
          ) : (
            <>Sign Up</>
          )}
        </Button>
      </motion.form>
    </Form>
  );
};

export default RegisterForm;
