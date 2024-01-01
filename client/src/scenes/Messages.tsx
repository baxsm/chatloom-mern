import Chatbox from "@/components/messages/chatbox";
import Sidebar from "@/components/messages/sidebar";
import { FC } from "react";

const Messages: FC = () => {
  return (
    <div className="flex overflow-hidden">
      <div className="w-[350px]">
        <Sidebar />
      </div>
      <div className={`flex-1 duration-300`}>
        <Chatbox
        />
      </div>
    </div>
  );
};

export default Messages;
