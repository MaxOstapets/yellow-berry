import Image from "next/image";

interface IProps {
    item: string | {link: string, icon: string};
}

const ColumnItem: React.FC<IProps> = ({ item }) => {
    const val = typeof item === "string"
    return (
        <li className="flex items-center gap-2">
            {!val && <Image src={item.icon} alt={`${item} icon`} width={15} height={13}/>}
            <span className="font-sans font-normal text-sm leading-5 text-gray-7">{val ? item : item.link}</span>
        </li>
    );
};

export default ColumnItem;
