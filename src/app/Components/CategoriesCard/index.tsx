import Image from "next/image"
import { Quicksand } from "next/font/google"

interface IProps {
    img: string,
    count: number,
    category: string,
    bgColor: string,
}

interface IPosition {
    top?: string,
    left: string
}

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["500", "700", "400", "300"]
})

export const CategoriesCard: React.FC<IPosition> = ({left, top}) => {
    const categoryCardsItems: IProps[] = [
        {
            category: "Cold Drinks",
            count: 49,
            img: "/images/coldDrinksIcon.png",
            bgColor: 'bg-blue-1'
        },
        {
            category: "Bakery",
            count: 8,
            img: "/images/bakeryIcon.png",
            bgColor: 'bg-pink-2'
        },
        {
            category: "Vegetables",
            count: 485,
            img: "/images/vegetablesIcon.png",
            bgColor: 'bg-red-1'
        },
        {
            category: "Fruits",
            count: 291,
            img: "/images/fruitsIcon.png",
            bgColor: 'bg-green-2'
        },
    ]
    return (
        <div className={`flex justify-center items-center gap-6 absolute rounded-tl-[30px] p-7 ${left} ${top} bg-white`}>
            {categoryCardsItems.map((el) =>
                <div className={`w-198 h-168 ${el.bgColor} flex justify-center items-center flex-col gap-4 rounded-3xl`} key={el.category}>
                    <Image src={el.img} width={50} height={50} alt='coldDrinks' />
                    <div className='flex justify-center items-center flex-col gap-0'>
                        <p className='font-sans font-medium text-base leading-5 tracking-0.48 text-gray-4'>{el.category}</p>
                        <p className='font-sans font-light text-xs leading-6 tracking-0.48 text-gray-7'>{el.count} items</p>
                    </div>
                </div>
            )}
        </div>
    )
}
