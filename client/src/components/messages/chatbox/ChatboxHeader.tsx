import { Button } from "@/components/ui/button";
import { FC, Dispatch, SetStateAction } from "react";
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai";

interface ChatboxHeaderProps {
  setIsSideinfoActive: Dispatch<SetStateAction<boolean>>;
  isSideinfoActive: boolean;
}

const ChatboxHeader: FC<ChatboxHeaderProps> = ({
  setIsSideinfoActive,
  isSideinfoActive,
}) => {
  return (
    <div className="bg-black/80 w-full flex justify-between items-center h-[80px] rounded-tl-[2rem] rounded-tr-[2rem] px-8">
      <div className="flex gap-8 items-center">
        <div className="">Image</div>
        <h5 className="text-sm text-secondary">
          Conversation with{" "}
          <span className="font-semibold text-primary">John Doe</span>
        </h5>
      </div>
      <div className="flex gap-8 items-center">
        <Button
          onClick={() => setIsSideinfoActive((prev) => !prev)}
          variant="ghost"
          className={`text-xl rounded-xl ${
            isSideinfoActive &&
            "bg-primary-background hover:bg-primary-background"
          }`}
        >
          {isSideinfoActive ? <AiOutlineMenuUnfold /> : <AiOutlineMenuFold />}
        </Button>
      </div>
    </div>
  );
};

export default ChatboxHeader;
