export const Timer = () => {
    return (
        <div className='w-[240px] h-10 border rounded-[15px] border-gray-8 flex justify-center items-center gap-3'>
            <span className='font-sans font-semibold text-[15px] leading-7 tracking-0.32 text-gray-4 flex gap-1 justify-center items-center'>891 <p className='font-normal text-sm'>Days</p></span>
            <ul className='font-sans font-semibold text-[15px] leading-7 tracking-0.32 text-gray-4 flex justify-center items-center gap-4'>
                <li>3</li>
                <li>:</li>
                <li>25</li>
                <li>:</li>
                <li>10</li>
            </ul>
        </div>
    )
}