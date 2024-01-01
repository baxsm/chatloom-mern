import { FC} from "react";
import ChatboxHeader from "./ChatboxHeader";
import Chatfeed from "./Chatfeed";
import MessageForm from "./MessageForm";

interface ChatboxProps {

}

const Chatbox: FC<ChatboxProps> = () => {
  return (
    <div className="bg-dark-2 relative h-screen">
      <ChatboxHeader
      />
      <div className="flex-col h-full max-h-[calc(100vh-180px)]">
        <Chatfeed />
      </div>
      <div className="">
        <MessageForm />
      </div>
    </div>
  );
};

export default Chatbox;
