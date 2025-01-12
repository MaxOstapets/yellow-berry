interface IProps {
    title: string;
    children: React.ReactNode;
    border?: string
}

export const ListLayout: React.FC<IProps> = ({ title, children, border }) => {
    return (
        <div className={`flex items-start flex-col gap-[19px] py-5 pl-5 ${border}`}>
            <span className="font-sans font-bold text-lg leading-[21px] tracking-0.48 text-gray-4">{title}</span>
            {children}
        </div>
    );
};
