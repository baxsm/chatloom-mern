import { FC } from "react";
import { baseUrl } from "@/constants/baseUrl";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUser } from "@/hooks/auth/useUser";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { MdLogout } from "react-icons/md";
import { useSignOut } from "@/hooks/auth/useSignout";

interface UserProfileSheetProps {}

const UserProfileSheet: FC<UserProfileSheetProps> = () => {
  const { user } = useUser();
  const signout = useSignOut();
  return (
    <Sheet>
      <SheetTrigger>
        <Avatar className="border-2 border-primary-background w-12 h-12 cursor-pointer">
          <AvatarImage
            src={
              `${baseUrl}/uploads/${user?.imageUrl}` || "/images/profile.jpg"
            }
            className="object-cover"
          />
          <AvatarFallback>{user?.name.substring(0, 2)}</AvatarFallback>
        </Avatar>
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader className="mt-8">
          <div className="w-full h-full flex flex-col gap-8 items-center justify-center">
            <Avatar className="border-2 border-primary-background w-32 h-32">
              <AvatarImage
                src={
                  `${baseUrl}/uploads/${user?.imageUrl}` ||
                  "/images/profile.jpg"
                }
                className="object-cover"
              />
              <AvatarFallback>{user?.name.substring(0, 2)}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-2 items-center">
              <h5 className="text-xl text-primary font-semibold">
                {user?.name}
              </h5>
              <p className="text-sm text-secondary">@{user?.username}</p>
            </div>
          </div>
          <Button onClick={signout} className="absolute bottom-8 w-full left-0">
            <MdLogout className="mr-2" />
            Logout
          </Button>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default UserProfileSheet;
