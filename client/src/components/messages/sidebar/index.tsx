import { FC } from "react";
import { Input } from "@/components/ui/input";
import { AiOutlineSearch } from "react-icons/ai";

import SidebarHeader from "./sidebarHeader";

// interface SidebarProps {}

const Sidebar: FC = () => {

  return (
    <section className="max-h-screen h-screen border-r-2 border-r-dark-5">
      <SidebarHeader />
      <div className="px-4 py-2">
        <div className="bg-dark-3 rounded-xl flex gap-1 items-center pl-4 py-1">
          <AiOutlineSearch className="text-white text-xl" />
          <Input
            type="text"
            className="pr-4 bg-transparent border-none outline-none"
            placeholder="Search"
          />
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
