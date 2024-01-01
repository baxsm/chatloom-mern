import { Button } from "@/components/ui/button";
import { FC } from "react";
import { AiOutlineMenuFold } from "react-icons/ai";

interface ChatboxHeaderProps {}

const ChatboxHeader: FC<ChatboxHeaderProps> = () => {
  return (
    <div className="bg-dark-4 w-full flex justify-between items-center h-[80px] px-8">
      <div className="flex gap-8 items-center">
        <div className="">Image</div>
        <h5 className="text-sm text-secondary">
          Conversation with{" "}
          <span className="font-semibold text-primary">John Doe</span>
        </h5>
      </div>
      <div className="flex gap-8 items-center">
        <Button variant="ghost" className={`text-xl rounded-xl`}>
          <AiOutlineMenuFold />
        </Button>
      </div>
    </div>
  );
};

export default ChatboxHeader;
