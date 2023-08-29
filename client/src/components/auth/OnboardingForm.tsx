import { onboardingSchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChangeEvent, FC, useState } from "react";
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
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { USER_STORAGE } from "@/hooks/auth/user.localstore";
import { useOnboarding } from "@/hooks/auth/useOnboarding";

const OnboardingForm: FC = () => {
  const user = USER_STORAGE.getUser();

  const form = useForm<z.infer<typeof onboardingSchema>>({
    resolver: zodResolver(onboardingSchema),
    defaultValues: {
      username: user?.name.split(" ").join("_").substring(0, 8),
    },
  });

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file);
    } else {
      setSelectedFile(null);
    }
  };

  const { mutate: onboarding, isLoading } = useOnboarding();

  const onSubmit = (values: z.infer<typeof onboardingSchema>) => {
    if (user) {
      onboarding({
        username: values.username,
        userId: user?._id,
        file: selectedFile,
      });
    }
  };

  return (
    <Form {...form}>
      <motion.form
        variants={fadeIn({ direction: "left", type: "tween" })}
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6 mt-4"
      >
        <div className="flex justify-center">
          <div className="w-fit relative">
            <Avatar className="h-32 w-32">
              <AvatarImage
                src={
                  selectedFile
                    ? URL.createObjectURL(selectedFile)
                    : "/images/profile.jpg "
                }
                className="object-cover"
              />
              <AvatarFallback>{user?.name.substring(0, 2)}</AvatarFallback>
            </Avatar>
            <label className="p-3 rounded-xl absolute top-0 -right-12 hover:bg-accent hover:text-primary duration-300 cursor-pointer">
              <AiOutlineCloudUpload className="text-xl" />
              <input
                type="file"
                hidden
                accept="image/*"
                onChange={handleFileChange}
              />
            </label>
          </div>
        </div>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <div className="flex justify-between items-center">
                <FormLabel>Username</FormLabel>
                <FormMessage />
              </div>
              <FormControl>
                <div className="relative flex items-center">
                  <MdOutlineDriveFileRenameOutline className="absolute left-4 text-base text-secondary" />
                  <Input
                    placeholder="Username"
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
              Applying changes
            </>
          ) : (
            <>Continue</>
          )}
        </Button>
      </motion.form>
    </Form>
  );
};

export default OnboardingForm;
