import { loginSchema } from "@/lib/schemas";
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
} from "react-icons/ai";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";
import { useLogin } from "@/hooks/auth/useLogin";

const LoginForm: FC = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate: login, isLoading } = useLogin();

  const onSubmit = (values: z.infer<typeof loginSchema>) => {
    login({
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
          name="email"
          render={({ field }) => (
            <FormItem>
              <div className="flex justify-between items-center">
                <FormLabel>Email</FormLabel>
                <FormMessage />
              </div>
              <FormControl>
                <div className="relative flex items-center">
                  <AiOutlineMail className="absolute left-4 text-base text-secondary" />
                  <Input
                    disabled={isLoading}
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
              <div className="flex justify-between items-center">
                <FormLabel>Password</FormLabel>
                <FormMessage />
              </div>
              <FormControl>
                <div className="relative flex items-center">
                  <AiFillLock className="absolute left-4 text-base text-secondary" />
                  <Input
                    disabled={isLoading}
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
        <div className="flex justify-end items-center px-2">
          <p className="text-xs text-secondary hover:text-primary duration-300 cursor-pointer underline-offset-4 underline">
            Forgot password?
          </p>
        </div>
        <Button disabled={isLoading} className="rounded-xl mt-4">
          {isLoading ? (
            <>
              <Loader2 className="text-primary w-5 h-5 animate-spin mr-2" />
              Verifying credentials
            </>
          ) : (
            <>Log In</>
          )}
        </Button>
      </motion.form>
    </Form>
  );
};

export default LoginForm;
