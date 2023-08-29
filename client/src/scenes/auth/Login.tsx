import LoginForm from "@/components/auth/LoginForm";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineLogin } from "react-icons/ai";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import SectionWrapper from "@/hoc/SectionWrapper";
import { fadeIn, textVariant } from "@/lib/motion";

const Login: FC = () => {
  const navigate = useNavigate();

  return (
    <div className=" bg-dark-1 rounded-xl shadow-sm h-full relative">
      <div className="flex flex-col gap-4 px-12 lg:px-20 h-full overflow-x-hidden">
        <motion.div
          variants={textVariant({})}
          className="flex items-center justify-center pt-8 pb-4"
        >
          <img src="/logo.png" className="w-16 object-contain" />
        </motion.div>
        <motion.div
          variants={textVariant({})}
          className="flex flex-col gap-4 text-center mb-4"
        >
          <h5 className="font-semibold text-3xl">Welcome back!</h5>
          <p className="text-secondary text-sm">Please enter your details</p>
        </motion.div>
        <LoginForm />
      </div>
      <motion.div
        variants={fadeIn({ direction: "down", type: "tween", delay: 0.4 })}
        className="absolute top-4 right-4 z-[20]"
      >
        <Button
          onClick={() => navigate("/auth/register")}
          type="button"
          className="p-6 rounded-xl text-secondary hover:text-primary duration-300"
          variant="ghost"
        >
          Sign Up <AiOutlineLogin className="ml-2 text-base" />
        </Button>
      </motion.div>
    </div>
  );
};

const LoginWrapper: FC = SectionWrapper(Login, "login");
export default LoginWrapper;
