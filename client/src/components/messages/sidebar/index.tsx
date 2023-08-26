import { FC } from "react";
import { Input } from "@/components/ui/input";
import {AiOutlineSearch} from "react-icons/ai"

// interface SidebarProps {}

const Sidebar: FC= () => {
  return (
    <section className="max-h-screen h-screen p-8">
      <div className="bg-dark-3 rounded-xl flex gap-1 items-center pl-4 py-1">
        <AiOutlineSearch className="text-white text-xl"/>
        <Input type="text" className="pr-4 bg-transparent border-none outline-none" placeholder="Search"/>
      </div>
    </section>
  );
};

export default Sidebar;
