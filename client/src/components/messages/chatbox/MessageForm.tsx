import { Input } from '@/components/ui/input'
import { FC } from 'react'

interface MessageFormProps {
  
}

const MessageForm: FC<MessageFormProps> = ({}) => {
  return (
    <div className="bg-dark-3 p-4 rounded-2xl">
        <Input type='text' className='border-none bg-transparent px-4'/>
    </div>
  )
}

export default MessageForm