import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { FC } from "react";
import { AiOutlineSend } from "react-icons/ai";

interface MessageFormProps {}

const MessageForm: FC<MessageFormProps> = () => {
  return (
    <div className="p-4 flex gap-4 relative">
      <Textarea
        rows={2}
        className="border-none bg-transparent px-4 bg-dark-3 rounded-xl h-[70px] min-h-[70px] resize-none"
      />
      <div className="p-1">
        <Button className="rounded-full p-0 w-14 h-14">
          <AiOutlineSend className="text-xl" />
        </Button>
      </div>
    </div>
  );
};

export default MessageForm;
