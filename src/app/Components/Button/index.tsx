interface IProps {
    text: string
}

export const Button:React.FC<IProps> = ({text}) => {
    return (
        <button className="font-serif font-normal text-sm leading-7 tracking-0.48 text-white px-[26px] py-[9px] border border-blue-3 rounded-[10px] bg-blue-3">
            {text}
        </button>
    )
}