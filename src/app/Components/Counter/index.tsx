export const Counter = () => {
    return (
        <div className="flex justify-center items-center px-2 py-[6px] border border-gray-8 rounded-[10px] gap-[18px]">
            <button className="font-serif font-normal text-xl leading-[30px] tracking-0.32 text-gray-3">-</button>
            <span className="font-serif font-normal text-sm leading-[35px] tracking-0.32 text-gray-3">1</span>
            <button className="font-serif font-normal text-xl leading-[30px] tracking-0.32 text-gray-3">+</button>
        </div>
    )
}