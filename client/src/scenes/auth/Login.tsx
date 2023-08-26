import LoginForm from "@/components/auth/LoginForm";
import { FC } from "react";

const Login: FC = () => {
  return (
    <div className=" bg-dark-1 rounded-xl shadow-sm h-full">
      <div className="flex flex-col gap-4 px-12 lg:px-20 h-full">
        <div className="flex items-center justify-center pt-12 pb-8">
          <img src="/logo.png" className="w-16 object-contain" />
        </div>
        <div className="flex flex-col gap-4 text-center mb-4">
          <h5 className="font-semibold text-3xl">Welcome back!</h5>
          <p className="text-secondary text-sm">Please enter your details</p>
        </div>
        <LoginForm />
        <div className="h-full flex items-end justify-center pb-12">
          <h5 className="text-secondary text-center">
            Don't have an account?{" "}
            <span className="font-semibold text-primary">Sign Up</span>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Login;
