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
import { Checkbox } from "../ui/checkbox";
import { CheckedState } from "@radix-ui/react-checkbox";

const LoginForm: FC = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isRememberMe, setIsRememberMe] = useState<CheckedState>(false);

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof loginSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4 mt-4"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
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
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
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
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-between items-center px-2">
          <div className="flex gap-2 items-center">
            <Checkbox
              checked={isRememberMe}
              onCheckedChange={setIsRememberMe}
            />
            <label className="text-xs">Remember me</label>
          </div>
          <p className="text-xs text-secondary hover:text-primary duration-300 cursor-pointer underline-offset-4 underline">
            Forgot password?
          </p>
        </div>
        <Button className="rounded-xl mt-4">Log In</Button>
      </form>
    </Form>
  );
};

export default LoginForm;
