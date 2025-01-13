import Image from "next/image"

interface IProps{
    page: string,
    previousPage: string,
    currentPage: string
}

export const Path:React.FC<IProps> = ({page, previousPage, currentPage}) => {
    return (
        <div className="w-full py-[25px] flex justify-between px-44 items-center bg-gray-2 border-y border-gray-8 mb">
            <span className="font-sans font-bold text-base leading-[19px] tracking-0.48 text-gray-4">{page}</span>
            <div className="flex justify-center items-center gap-[10px]">
                <span className="font-serif font-semibold text-sm leading-7 tracking-0.48 text-gray-7">{previousPage}</span>
                <Image src="/images/pathArrow.png" alt="pathArrow" width={7.75} height={7.23} />
                <span className="font-serif font-normal text-sm leading-7 tracking-0.48 text-gray-7">{currentPage}</span>
            </div>
        </div>
    )
}