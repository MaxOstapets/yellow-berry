import ColumnItem from "../ColumnItem";

interface IProps {
    item: string[] | {link: string, icon: string}[];
    title: string;
}

const Column: React.FC<IProps> = ({ item, title }) => {
    return (
        <div className="flex justify-center items-start flex-col gap-5">
            <span className="font-serif font-bold text-lg leading-[21px] text-gray-4 w-[195px] h-[35px] border-b border-gray-8 flex justify-start items-start">
                {title}
            </span>
            <ul className="flex justify-center items-start flex-col gap-4">
                {item.map((el, index) => (
                    <ColumnItem item={el} key={index} />
                ))}
            </ul>
        </div>
    );
};

export default Column;
