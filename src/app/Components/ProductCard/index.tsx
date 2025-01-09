import { IoStarOutline, IoStarSharp } from "react-icons/io5";
import Image, { StaticImageData } from "next/image";
import { Quicksand, Poppins } from "next/font/google";

interface IProps {
    img: StaticImageData,
    type: string,
    product: string,
    price: number,
    discount?: number,
    weight?: number,
    capacity?: number,
    pack?: number,
    availability: boolean,
    status?: string 
}

interface ILink {
    link: IProps
}

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["500", "700", "400", "300"]
})

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["500", "700", "400", "300", "100", "200", "600", "800", "900"]
})
  

//TODO think about discount logic

export const ProductCard: React.FC<ILink> = ({ link }) => {
    const { img, type, product, price, discount, weight, capacity, pack, availability, status } = link

    return (
        <div className='flex justify-start items-center flex-col rounded-[20px] w-[306px] h-[423px] bg-white border border-gray-8 relative'>
            <p className="font-sans font-medium text-sm leading-[21px] tracking-0.32 text-gray-3 rotate-90 top-5 left-1 absolute">{status}</p>
            <Image src={img} alt='product' className='w-full rounded-t-[20px]' />
            <div className='flex justify-center items-start flex-col pt-6 gap-2 border-t border-gray-8'>
                <div className='flex justify-between items-center w-[306px] px-[21px]'>
                    <p className='font-sans font-light text-[13px] leading-4 tracking-0.48 text-gray-3'>{type}</p>
                    <ul className='flex justify-center items-center gap-1 text-yellow-3'>
                        <li><IoStarSharp /></li>
                        <li><IoStarSharp /></li>
                        <li><IoStarSharp /></li>
                        <li><IoStarSharp /></li>
                        <li><IoStarOutline /></li>
                    </ul>
                </div>
                <span className='font-serif font-semibold text-[15px] leading-[18px] tracking-0.48 text-gray-4 pl-[21px]'>{product}</span>
                <div className='flex justify-between items-center gap-[20px] w-[306px] px-[21px]'>
                    <div className='flex justify-center items-end gap-[6px]'>
                        <p className='font-sans font-bold text-base leading-6 tracking-0.32 text-gray-7'>${price}</p>
                        {discount && <p className='font-sans font-normal text-sm leading-[21px] tracking-0.32 line-through text-gray-7'>${discount}</p>}
                        {!availability && <p className='font-sans font-normal text-sm leading-[21px] tracking-0.32 text-gray-7'>Out Of Stock</p>}
                    </div>
                    {weight && <span className='font-sans font-normal text-sm leading-[21px] tracking-0.32 text-gray-7'>{weight} g</span>}
                    {capacity && <span className='font-sans font-normal text-sm leading-[21px] tracking-0.32 text-gray-7'>{capacity} ml</span>}
                    {pack && <span className='font-sans font-normal text-sm leading-[21px] tracking-0.32 text-gray-7'>{pack} Pack</span>}
                </div>
            </div>
        </div>
    )
}
