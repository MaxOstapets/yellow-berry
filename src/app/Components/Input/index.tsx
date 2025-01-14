interface IProps {
    placeholder: string,
    width: string
}

export const Input: React.FC<IProps> = ({ placeholder, width }) => {
    return (
        <input
            type="text"
            placeholder={placeholder}
            className={`font-serif font-normal text-sm leading-[21px] tracking-0.32 text-gray-4 placeholder:text-gray-10 ${width} py-[15px] pl-4 border border-gray-8 rounded-[10px]`}
        />
    )
}