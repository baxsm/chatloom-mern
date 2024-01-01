import { FC } from "react";

import UserProfileSheet from "./UserProfileSheet";

interface SidebarHeaderProps {}

const SidebarHeader: FC<SidebarHeaderProps> = () => {
  return (
    <div className="h-[80px] px-4 bg-dark-3">
      <div className="flex flex-col gap-8 justify-center h-full">
        <UserProfileSheet />
      </div>
    </div>
  );
};

export default SidebarHeader;
