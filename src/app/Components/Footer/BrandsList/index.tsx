import BrandsItem from "../BrandsItem";

interface IProps {
    title: string;
    item: string[];
}

const BrandsList: React.FC<IProps> = ({ item, title }) => {
    return (
        <div className="w-[636px] flex justify-start items-start">
            <span className="font-sans font-semibold text-sm leading-7 tracking-0.48 text-gray-7 pr-2">{title}:</span>
            <ul className="flex flex-wrap gap-1">
                {item.map((itemName, index) => (
                    <BrandsItem item={itemName} key={index} />
                ))}
            </ul>
        </div>
    );
};

export default BrandsList;
