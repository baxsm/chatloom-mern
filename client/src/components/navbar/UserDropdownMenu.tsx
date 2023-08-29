import { FC } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { USER_STORAGE } from "@/hooks/auth/user.localstore";
import { baseUrl } from "@/constants/baseUrl";
import { LogOut } from "lucide-react";
import { useSignOut } from "@/hooks/auth/useSignout";

const UserDropdownMenu: FC = () => {
  const user = USER_STORAGE.getUser();

  const signout = useSignOut();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="cursor-pointer border-2 border-primary-background h-12 w-12">
          <AvatarImage
            src={
              user?.imageUrl
                ? `${baseUrl}/uploads/${user?.imageUrl}`
                : `/images/profile.jpg`
            }
            className="object-cover"
          />
          <AvatarFallback>{user?.name?.substring(0, 2)}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-4 rounded-xl">
        <DropdownMenuLabel>{user?.name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={signout}>
          <LogOut size={18} className="mr-2" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdownMenu;
