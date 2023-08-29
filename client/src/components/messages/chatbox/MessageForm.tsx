import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { FC } from "react";
import { AiOutlineSend } from "react-icons/ai";

interface MessageFormProps {}

const MessageForm: FC<MessageFormProps> = ({}) => {
  return (
    <div className="p-4 flex gap-4">
      <Textarea
        rows={2}
        className="border-none bg-transparent px-4 bg-dark-3 rounded-2xl min-h-[50px]"
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
