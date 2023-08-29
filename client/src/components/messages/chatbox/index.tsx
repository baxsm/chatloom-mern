import { FC, Dispatch, SetStateAction } from "react";
import ChatboxHeader from "./ChatboxHeader";
import Chatfeed from "./Chatfeed";
import MessageForm from "./MessageForm";

interface ChatboxProps {
  setIsSideinfoActive: Dispatch<SetStateAction<boolean>>;
  isSideinfoActive: boolean;
}

const Chatbox: FC<ChatboxProps> = ({
  setIsSideinfoActive,
  isSideinfoActive,
}) => {
  return (
    <div className="bg-dark-2 border-2 border-secondary/10 rounded-[2rem]">
      <ChatboxHeader
        setIsSideinfoActive={setIsSideinfoActive}
        isSideinfoActive={isSideinfoActive}
      />
      <div className="flex-col h-[calc(100vh-350px)]">
        <Chatfeed />
      </div>
      <div className="">
        <MessageForm />
      </div>
    </div>
  );
};

export default Chatbox;
