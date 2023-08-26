import Chatbox from "@/components/messages/chatbox";
import Sidebar from "@/components/messages/sidebar";
import Sideinfo from "@/components/messages/sideinfo";
import { FC, useState } from "react";

const Messages: FC = () => {
  const [isSideinfoActive, setIsSideinfoActive] = useState(false);

  return (
    <div className="flex gap-8">
      <div className="w-[300px]">
        <Sidebar />
      </div>
      <div className={`flex-1 duration-300`}>
        <Chatbox setIsSideinfoActive={setIsSideinfoActive} isSideinfoActive={isSideinfoActive}/>
      </div>
      <div className={`${isSideinfoActive ? "w-[300px]" : "w-0"} duration-300`}>
        <Sideinfo />
      </div>
    </div>
  );
};

export default Messages;
