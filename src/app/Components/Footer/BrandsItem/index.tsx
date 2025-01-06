interface IProps {
    item: string
}

const BrandsItem:React.FC<IProps> = ({item}) => {
    return(
        <li className="font-sans font-normal text-[13px] leading-7 tracking-0.48 text-gray-7">{item} |</li>
    )
}

export default BrandsItem