interface IProps{
    text: string,
}

export const ListItem:React.FC<IProps> = ({text}) => {
    return (
        <li className="flex justify-center items-center gap-3" key={text}>
            <input type="checkbox" className="w-[18px] h-[18px] border rounded-[5px] border-gray-8" />
            <span className="font-serif font-normal text-sm leading-5 tracking-0.32 text-gray-3">{text}</span>
        </li>
    )
}