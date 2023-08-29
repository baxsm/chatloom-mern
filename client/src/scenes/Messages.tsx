import Chatbox from "@/components/messages/chatbox";
import Sidebar from "@/components/messages/sidebar";
import Sideinfo from "@/components/messages/sideinfo";
import { FC, useState } from "react";

const Messages: FC = () => {
  const [isSideinfoActive, setIsSideinfoActive] = useState(false);

  return (
    <div className="flex p-8 overflow-hidden">
      <div className="w-[300px] pr-8">
        <Sidebar />
      </div>
      <div className={`flex-1 duration-300 ${isSideinfoActive && "pr-8"}`}>
        <Chatbox
          setIsSideinfoActive={setIsSideinfoActive}
          isSideinfoActive={isSideinfoActive}
        />
      </div>
      <div
        className={`${
          isSideinfoActive
            ? "w-[300px] translate-x-0 pr-8"
            : "w-0 translate-x-[400px]"
        } duration-300`}
      >
        <Sideinfo />
      </div>
    </div>
  );
};

export default Messages;
