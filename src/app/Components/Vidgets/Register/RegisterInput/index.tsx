import { Input } from '@components/Input'

interface IProps{
    span: string,
    placeholder: string,
}

export const RegisterInput:React.FC<IProps> = ({span, placeholder}) => {
    return (
        <li className='flex justify-center items-start flex-col gap-[6px]'>
            <span className='font-serif font-medium text-sm leading-[18px] tracking-0.32 text-gray-4'>{span}*</span>
            <Input placeholder={placeholder} width='w-[605px]' />
        </li>
    )
}