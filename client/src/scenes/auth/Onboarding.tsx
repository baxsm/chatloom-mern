import { FC, useEffect } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "@/hoc/SectionWrapper";
import { textVariant } from "@/lib/motion";
import OnboardingForm from "@/components/auth/OnboardingForm";
import { useUser } from "@/hooks/auth/useUser";
import { useNavigate } from "react-router-dom";

const Onboarding: FC = () => {
  const navigate = useNavigate();
  const { user } = useUser();

  useEffect(() => {
    if (user && user.onboarding) {
      navigate("/");
    }
  }, [user]);

  return (
    <div className="flex justify-center items-center w-full h-screen py-8">
      <div className="bg-dark-1 rounded-xl shadow-sm h-full relative">
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
            <h5 className="font-semibold text-3xl">Your Profile</h5>
            <p className="text-secondary text-sm">
              Adjust your profile to your liking
            </p>
          </motion.div>
          <OnboardingForm />
        </div>
      </div>
    </div>
  );
};

const OnboardingWrapper: FC = SectionWrapper(Onboarding, "login");
export default OnboardingWrapper;
