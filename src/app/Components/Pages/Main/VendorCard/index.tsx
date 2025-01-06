interface IProps {
    name: string,
    fruits: number,
    vegetables: number,
    snacks: number,
    sales: number,
    yellowColor?: boolean,
}

interface ILink {
    link: IProps
}

const VendorCard: React.FC<ILink> = ({ link }) => {
    const { name, fruits, vegetables, snacks, sales, yellowColor } = link

    return (
        <div className='w-[745] h-[115px] border border-blue-3 flex justify-center flex-col gap-[11px] rounded-[31px]'>
            <div className='flex justify-between w-full px-[31px]'>
                {
                    yellowColor ? <span className='font-serif font-bold text-lg leading-[21px] tracking-0.48 text-yellow-2'>{name}</span>
                    : <span className='font-serif font-bold text-lg leading-[21px] tracking-0.48 text-gray-4'>{name}</span>
                }
                <p className='font-sans font-normal text-sm leading-7 tracking-0.48 text-gray-7'>Sales - {sales}</p>
            </div>
            <span className='font-sans font-light text-sm leading-5 tracking-0.48 text-gray-7 pl-[31px]'>Fruits ({fruits}) | Vegetables ({vegetables}) | Snacks ({snacks})</span>
        </div>
    )
}

export default VendorCard