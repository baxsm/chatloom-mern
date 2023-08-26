import { FC, Dispatch, SetStateAction } from "react";
import ChatboxHeader from "./ChatboxHeader";
import Chatfeed from "./Chatfeed";
import MessageForm from "./MessageForm";

interface ChatboxProps {
  setIsSideinfoActive: Dispatch<SetStateAction<boolean>>
  isSideinfoActive: boolean;
}

const Chatbox: FC<ChatboxProps> = ({setIsSideinfoActive, isSideinfoActive}) => {

  return (
    <div className="mt-8 h-full bg-dark-2 rounded-tl-[2rem] rounded-tr-[2rem]">
      <ChatboxHeader setIsSideinfoActive={setIsSideinfoActive} isSideinfoActive={isSideinfoActive}/>
      <div className="flex-col h-[calc(100vh-300px)]">
        <Chatfeed />
      </div>
      <div className="px-8">
        <MessageForm />
      </div>
    </div>
  );
};

export default Chatbox;
